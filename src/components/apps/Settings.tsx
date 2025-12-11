import React from "react";
import { wallpaperCategories } from "~/configs/wallpaper-gallery";
import { wallpapers } from "~/configs";
import type { WallpaperItem } from "~/configs/wallpaper-gallery";

interface SettingsSection {
  id: string;
  title: string;
  icon: string;
  content: JSX.Element;
}

interface SettingsState {
  selectedSection: string;
}

const GeneralSettings = () => {
  return (
    <div className="p-4 space-y-4 text-white">
      <div>
        <h2 className="text-lg font-medium mb-3">General</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-white">Appearance</div>
              <div className="text-xs text-gray-400">Choose the appearance for macOS</div>
            </div>
            <select className="px-2 py-1 text-xs rounded border border-gray-600 bg-black/10 text-white backdrop-blur-sm">
              <option>Light</option>
              <option>Dark</option>
              <option>Auto</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-white">Accent Color</div>
              <div className="text-xs text-gray-400">Choose an accent color</div>
            </div>
            <div className="flex space-x-2">
              {["Blue", "Purple", "Pink", "Red", "Orange", "Yellow", "Green"].map(
                (color) => (
                  <div
                    key={color}
                    className="w-6 h-6 rounded-full border-2 border-gray-600 cursor-pointer"
                    style={{ backgroundColor: color.toLowerCase() }}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WallpaperSettings = () => {
  const { wallpaper, setWallpaper, dark } = useStore((state) => ({
    wallpaper: state.wallpaper,
    setWallpaper: state.setWallpaper,
    dark: state.dark
  }));

  const currentWallpaperUrl = wallpaper || (dark ? wallpapers.night : wallpapers.day);

  const handleWallpaperSelect = (wallpaperUrl: string) => {
    setWallpaper(wallpaperUrl);
  };

  return (
    <div className="p-4 space-y-4 text-white overflow-y-auto">
      <div>
        <h2 className="text-lg font-medium mb-3">Wallpaper</h2>
        <div className="space-y-4">
          <div>
            <div className="text-sm font-medium mb-2 text-white">Current Wallpaper</div>
            <div className="w-48 h-32 rounded-lg overflow-hidden border border-gray-600">
              <img
                src={currentWallpaperUrl}
                alt="Current wallpaper"
                className="w-full h-full object-cover"
              />
            </div>
            <input
              type="text"
              value={currentWallpaperUrl}
              readOnly
              className="mt-2 w-48 px-2 py-1 text-xs rounded border border-gray-600 bg-black/10 text-white backdrop-blur-sm"
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-white">Fill Screen</div>
            </div>
            <select className="px-2 py-1 text-xs rounded border border-gray-600 bg-black/10 text-white backdrop-blur-sm">
              <option>Fill Screen</option>
              <option>Fit to Screen</option>
              <option>Stretch to Fill Screen</option>
              <option>Center</option>
              <option>Tile</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-white">Show on all Spaces</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-600 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="space-y-2">
            <button className="px-3 py-1.5 text-xs bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Add Photo
            </button>
            <button className="px-3 py-1.5 text-xs bg-gray-700/50 text-white rounded-lg hover:bg-gray-700 ml-2 backdrop-blur-sm">
              Add Folder or Album
            </button>
          </div>
        </div>
      </div>

      {/* Wallpaper Categories */}
      <div className="space-y-4">
        {wallpaperCategories.map((category) => (
          <div key={category.id}>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-white">{category.title}</h3>
              <span className="text-xs text-gray-400">
                Show All ({category.wallpapers.length})
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {category.wallpapers.map((item: WallpaperItem) => (
                <div
                  key={item.id}
                  onClick={() => handleWallpaperSelect(item.url)}
                  className={`relative cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                    currentWallpaperUrl === item.url
                      ? "border-blue-500"
                      : "border-gray-700 hover:border-gray-600"
                  }`}
                >
                  <img
                    src={item.url}
                    alt={item.name}
                    className="w-full h-20 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm px-1 py-0.5">
                    <p className="text-xs text-white truncate">{item.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const DisplaySettings = () => {
  return (
    <div className="p-4 space-y-4 text-white">
      <div>
        <h2 className="text-lg font-medium mb-3">Displays</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-white">Resolution</div>
              <div className="text-xs text-gray-400">
                Change the resolution of the display
              </div>
            </div>
            <select className="px-2 py-1 text-xs rounded border border-gray-600 bg-black/10 text-white backdrop-blur-sm">
              <option>Default for display</option>
              <option>Scaled</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-white">Brightness</div>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              defaultValue="75"
              className="w-40 h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-white">True Tone</div>
              <div className="text-xs text-gray-400">
                Automatically adjust display colors
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-600 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

const SoundSettings = () => {
  return (
    <div className="p-4 space-y-4 text-white">
      <div>
        <h2 className="text-lg font-medium mb-3">Sound</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-white">Output Volume</div>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              defaultValue="50"
              className="w-40 h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-white">Balance</div>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              defaultValue="50"
              className="w-40 h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-white">Alert Volume</div>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              defaultValue="50"
              className="w-40 h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Settings = () => {
  const [state, setState] = useState<SettingsState>({
    selectedSection: "general"
  });

  const sections: SettingsSection[] = [
    {
      id: "general",
      title: "General",
      icon: "i-material-symbols:settings",
      content: <GeneralSettings />
    },
    {
      id: "wallpaper",
      title: "Wallpaper",
      icon: "i-material-symbols:wallpaper",
      content: <WallpaperSettings />
    },
    {
      id: "displays",
      title: "Displays",
      icon: "i-material-symbols:desktop-windows",
      content: <DisplaySettings />
    },
    {
      id: "sound",
      title: "Sound",
      icon: "i-material-symbols:volume-up",
      content: <SoundSettings />
    }
  ];

  const selectedContent = sections.find((s) => s.id === state.selectedSection)?.content;

  return (
    <div className="w-full h-full flex bg-black/10 backdrop-blur-xl font-sf">
      {/* Sidebar */}
      <div className="w-56 bg-black/10 backdrop-blur-xl border-r border-gray-800 overflow-y-auto">
        <div className="p-3">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-2 py-1.5 text-xs rounded-lg border border-gray-700 bg-black/10 text-white placeholder-gray-500 backdrop-blur-sm"
          />
        </div>
        <nav className="px-2">
          {sections.map((section) => (
            <div
              key={section.id}
              onClick={() => setState({ selectedSection: section.id })}
              className={`flex items-center space-x-2 px-2 py-1.5 rounded-lg cursor-pointer mb-1 text-sm ${
                state.selectedSection === section.id
                  ? "bg-blue-600/30 text-blue-400"
                  : "hover:bg-white/5 text-gray-300"
              }`}
            >
              <span className={`${section.icon} text-base`} />
              <span className="font-medium">{section.title}</span>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto bg-black/10 backdrop-blur-xl">
        <div className="border-b border-gray-800 px-4 py-3">
          <div className="flex items-center space-x-3">
            <button className="text-gray-400 hover:text-white">
              <span className="i-material-symbols:arrow-back text-base" />
            </button>
            <h1 className="text-base font-semibold text-white">
              {sections.find((s) => s.id === state.selectedSection)?.title}
            </h1>
          </div>
        </div>
        {selectedContent}
      </div>
    </div>
  );
};

export default Settings;
