import React from "react";
import { apps, wallpapers } from "~/configs";
import { minMarginY } from "~/utils";
import type { MacActions } from "~/types";

interface DesktopState {
  showApps: {
    [key: string]: boolean;
  };
  appsZ: {
    [key: string]: number;
  };
  maxApps: {
    [key: string]: boolean;
  };
  minApps: {
    [key: string]: boolean;
  };
  maxZ: number;
  showLaunchpad: boolean;
  currentTitle: string;
  hideDockAndTopbar: boolean;
  spotlight: boolean;
  selectedIcons: {
    [key: string]: boolean;
  };
  iconPositions: {
    [key: string]: { x: number; y: number };
  };
  draggingIcon: string | null;
}

export default function Desktop(props: MacActions) {
  const [state, setState] = useState({
    showApps: {},
    appsZ: {},
    maxApps: {},
    minApps: {},
    maxZ: 2,
    showLaunchpad: false,
    currentTitle: "Finder",
    hideDockAndTopbar: false,
    spotlight: false,
    selectedIcons: {},
    iconPositions: {},
    draggingIcon: null
  } as DesktopState);

  const [spotlightBtnRef, setSpotlightBtnRef] =
    useState<React.RefObject<HTMLDivElement> | null>(null);
  const initializedRef = useRef(false);

  const { dark, brightness } = useStore((state) => ({
    dark: state.dark,
    brightness: state.brightness
  }));

  const getAppsData = (): void => {
    let showApps = {},
      appsZ = {},
      maxApps = {},
      minApps = {};

    apps.forEach((app) => {
      showApps = {
        ...showApps,
        [app.id]: !!app.show
      };
      appsZ = {
        ...appsZ,
        [app.id]: 2
      };
      maxApps = {
        ...maxApps,
        [app.id]: false
      };
      minApps = {
        ...minApps,
        [app.id]: false
      };
    });

    setState((prevState) => ({ ...prevState, showApps, appsZ, maxApps, minApps }));
  };

  useEffect(() => {
    if (!initializedRef.current) {
      initializedRef.current = true;
      getAppsData();
    }
  }, []);

  const toggleLaunchpad = (target: boolean): void => {
    const r = document.querySelector(`#launchpad`) as HTMLElement;
    if (target) {
      r.style.transform = "scale(1)";
      r.style.transition = "ease-in 0.2s";
    } else {
      r.style.transform = "scale(1.1)";
      r.style.transition = "ease-out 0.2s";
    }

    setState({ ...state, showLaunchpad: target });
  };

  const toggleSpotlight = (): void => {
    setState({ ...state, spotlight: !state.spotlight });
  };

  const setWindowPosition = (id: string): void => {
    const r = document.querySelector(`#window-${id}`) as HTMLElement;
    const rect = r.getBoundingClientRect();
    r.style.setProperty(
      "--window-transform-x",
      // "+ window.innerWidth" because of the boundary for windows
      (window.innerWidth + rect.x).toFixed(1).toString() + "px"
    );
    r.style.setProperty(
      "--window-transform-y",
      // "- minMarginY" because of the boundary for windows
      (rect.y - minMarginY).toFixed(1).toString() + "px"
    );
  };

  const setAppMax = (id: string, target?: boolean): void => {
    const maxApps = state.maxApps;
    if (target === undefined) target = !maxApps[id];
    maxApps[id] = target;
    setState({
      ...state,
      maxApps: maxApps,
      hideDockAndTopbar: target
    });
  };

  const setAppMin = (id: string, target?: boolean): void => {
    const minApps = state.minApps;
    if (target === undefined) target = !minApps[id];
    minApps[id] = target;
    setState({
      ...state,
      minApps: minApps
    });
  };

  const minimizeApp = (id: string): void => {
    setWindowPosition(id);

    // get the corrosponding dock icon's position
    let r = document.querySelector(`#dock-${id}`) as HTMLElement;
    const dockAppRect = r.getBoundingClientRect();

    r = document.querySelector(`#window-${id}`) as HTMLElement;
    // const appRect = r.getBoundingClientRect();
    const posY = window.innerHeight - r.offsetHeight / 2 - minMarginY;
    // "+ window.innerWidth" because of the boundary for windows
    const posX = window.innerWidth + dockAppRect.x - r.offsetWidth / 2 + 25;

    // translate the window to that position
    r.style.transform = `translate(${posX}px, ${posY}px) scale(0.2)`;
    r.style.transition = "ease-out 0.3s";

    // add it to the minimized app list
    setAppMin(id, true);
  };

  const closeApp = (id: string): void => {
    setAppMax(id, false);
    const showApps = state.showApps;
    showApps[id] = false;
    setState({
      ...state,
      showApps: showApps,
      hideDockAndTopbar: false
    });
  };

  const openApp = (id: string): void => {
    // add it to the shown app list
    const showApps = state.showApps;
    showApps[id] = true;

    // move to the top (use a maximum z-index)
    const appsZ = state.appsZ;
    const maxZ = state.maxZ + 1;
    appsZ[id] = maxZ;

    // get the title of the currently opened app
    const currentApp = apps.find((app) => {
      return app.id === id;
    });
    if (currentApp === undefined) {
      throw new TypeError(`App ${id} is undefined.`);
    }

    setState({
      ...state,
      showApps: showApps,
      appsZ: appsZ,
      maxZ: maxZ,
      currentTitle: currentApp.title
    });

    const minApps = state.minApps;
    // if the app has already been shown but minimized
    if (minApps[id]) {
      // move to window's last position
      const r = document.querySelector(`#window-${id}`) as HTMLElement;
      r.style.transform = `translate(${r.style.getPropertyValue(
        "--window-transform-x"
      )}, ${r.style.getPropertyValue("--window-transform-y")}) scale(1)`;
      r.style.transition = "ease-in 0.3s";
      // remove it from the minimized app list
      minApps[id] = false;
      setState({ ...state, minApps });
    }
  };

  const renderAppWindows = () => {
    return apps.map((app) => {
      if (app.desktop && state.showApps[app.id]) {
        const props = {
          id: app.id,
          title: app.title,
          width: app.width,
          height: app.height,
          minWidth: app.minWidth,
          minHeight: app.minHeight,
          aspectRatio: app.aspectRatio,
          x: app.x,
          y: app.y,
          z: state.appsZ[app.id],
          max: state.maxApps[app.id],
          min: state.minApps[app.id],
          close: closeApp,
          setMax: setAppMax,
          setMin: minimizeApp,
          focus: openApp
        };

        return (
          <AppWindow key={`desktop-app-${app.id}`} {...props}>
            {app.content}
          </AppWindow>
        );
      } else {
        return <div key={`desktop-app-${app.id}`} />;
      }
    });
  };

  const handleIconClick = (e: React.MouseEvent, appId: string) => {
    e.preventDefault();
    e.stopPropagation();

    // Don't handle click if we just finished dragging
    const iconElement = e.currentTarget as HTMLElement;
    if (iconElement.getAttribute("data-was-dragging") === "true") {
      return;
    }

    const selectedIcons = { ...state.selectedIcons };
    if (!e.shiftKey && !e.metaKey && !e.ctrlKey) {
      // Clear all selections if not holding modifier keys
      Object.keys(selectedIcons).forEach((key) => {
        selectedIcons[key] = false;
      });
    }
    selectedIcons[appId] = !selectedIcons[appId];
    setState({ ...state, selectedIcons });
  };

  const handleIconDoubleClick = (e: React.MouseEvent, appId: string) => {
    e.stopPropagation();
    openApp(appId);
  };

  const handleIconMouseDown = (e: React.MouseEvent, appId: string) => {
    e.stopPropagation();
    if (e.button !== 0) return; // Only handle left mouse button

    const startX = e.clientX;
    const startY = e.clientY;
    const iconPositions = { ...state.iconPositions };
    const currentPos = iconPositions[appId] || { x: 0, y: 0 };
    const startIconX = currentPos.x;
    const startIconY = currentPos.y;
    let hasMoved = false;
    const dragThreshold = 5; // pixels to move before starting drag
    let wasDragging = false;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const deltaX = Math.abs(moveEvent.clientX - startX);
      const deltaY = Math.abs(moveEvent.clientY - startY);

      if (deltaX > dragThreshold || deltaY > dragThreshold) {
        if (!hasMoved) {
          hasMoved = true;
          wasDragging = true;
          setState((prevState) => ({
            ...prevState,
            draggingIcon: appId
          }));
        }

        const totalDeltaX = moveEvent.clientX - startX;
        const totalDeltaY = moveEvent.clientY - startY;

        iconPositions[appId] = {
          x: startIconX + totalDeltaX,
          y: startIconY + totalDeltaY
        };

        setState((prevState) => ({
          ...prevState,
          iconPositions
        }));
      }
    };

    const handleMouseUp = () => {
      setState((prevState) => ({
        ...prevState,
        draggingIcon: null
      }));

      // Store drag state in a way that click handler can check
      if (wasDragging) {
        // Prevent click event if we dragged
        const iconElement = document.querySelector(
          `[data-icon-id="${appId}"]`
        ) as HTMLElement;
        if (iconElement) {
          iconElement.setAttribute("data-was-dragging", "true");
          setTimeout(() => {
            iconElement.removeAttribute("data-was-dragging");
          }, 100);
        }
      }

      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleDesktopClick = (e: React.MouseEvent) => {
    // Clear selection when clicking on desktop
    if (e.target === e.currentTarget) {
      const selectedIcons = { ...state.selectedIcons };
      Object.keys(selectedIcons).forEach((key) => {
        selectedIcons[key] = false;
      });
      setState({ ...state, selectedIcons });
    }
  };

  const renderDesktopIcons = () => {
    const desktopApps = apps.filter((app) => app.showOnDesktop === true);

    return (
      <div
        className="absolute inset-0"
        style={{ top: minMarginY, padding: "20px", zIndex: 1 }}
        onClick={handleDesktopClick}
      >
        {desktopApps.map((app, index) => {
          const position = state.iconPositions[app.id] || {
            x: (index % 5) * 120 + 20,
            y: Math.floor(index / 5) * 100 + 20
          };
          const isSelected = state.selectedIcons[app.id] || false;
          const isDragging = state.draggingIcon === app.id;

          return (
            <div
              key={`desktop-icon-${app.id}`}
              data-icon-id={app.id}
              className="flex flex-col items-center cursor-pointer group absolute select-none"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleIconClick(e, app.id);
              }}
              onDoubleClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                const iconElement = e.currentTarget as HTMLElement;
                if (iconElement.getAttribute("data-was-dragging") !== "true") {
                  handleIconDoubleClick(e, app.id);
                }
              }}
              onMouseDown={(e) => handleIconMouseDown(e, app.id)}
              style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                width: "100px",
                userSelect: "none",
                pointerEvents: "auto",
                zIndex: isDragging ? 1000 : isSelected ? 100 : 10
              }}
            >
              <div className="relative mb-1">
                <div
                  className={`absolute inset-0 rounded transition-all ${
                    isSelected
                      ? "bg-blue-500/40 border-2 border-blue-400"
                      : "group-hover:bg-white/10"
                  }`}
                  style={{
                    padding: "2px",
                    margin: "-2px"
                  }}
                />
                <img
                  src={app.img}
                  alt={app.title}
                  className={`w-16 h-16 object-contain transition-transform duration-150 ${
                    isDragging ? "scale-110 opacity-80" : "group-hover:scale-110"
                  }`}
                  draggable={false}
                />
              </div>
              <div
                className={`text-xs text-center px-1.5 py-0.5 rounded max-w-full break-words transition-colors ${
                  isSelected ? "bg-blue-500/50" : "group-hover:bg-blue-500/30"
                }`}
                style={{
                  color: "white",
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
                  wordBreak: "break-word",
                  lineHeight: "1.2"
                }}
              >
                {app.title}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const wallpaper = useStore((state) => state.wallpaper);
  const wallpaperUrl = wallpaper || (dark ? wallpapers.night : wallpapers.day);

  return (
    <div
      className="size-full overflow-hidden bg-center bg-cover"
      style={{
        backgroundImage: `url(${wallpaperUrl})`,
        filter: `brightness( ${(brightness as number) * 0.7 + 50}% )`
      }}
    >
      {/* Top Menu Bar */}
      <TopBar
        title={state.currentTitle}
        setLogin={props.setLogin}
        shutMac={props.shutMac}
        sleepMac={props.sleepMac}
        restartMac={props.restartMac}
        toggleSpotlight={toggleSpotlight}
        hide={state.hideDockAndTopbar}
        setSpotlightBtnRef={setSpotlightBtnRef}
      />

      {/* Desktop Icons */}
      {renderDesktopIcons()}

      {/* Desktop Apps */}
      <div
        className="window-bound z-10 absolute"
        style={{ top: minMarginY, pointerEvents: "none" }}
      >
        <div style={{ pointerEvents: "auto" }}>{renderAppWindows()}</div>
      </div>

      {/* Spotlight */}
      {state.spotlight && (
        <Spotlight
          openApp={openApp}
          toggleLaunchpad={toggleLaunchpad}
          toggleSpotlight={toggleSpotlight}
          btnRef={spotlightBtnRef as React.RefObject<HTMLDivElement>}
        />
      )}

      {/* Launchpad */}
      <Launchpad show={state.showLaunchpad} toggleLaunchpad={toggleLaunchpad} />

      {/* Dock */}
      <Dock
        open={openApp}
        showApps={state.showApps}
        showLaunchpad={state.showLaunchpad}
        toggleLaunchpad={toggleLaunchpad}
        hide={state.hideDockAndTopbar}
      />
    </div>
  );
}
