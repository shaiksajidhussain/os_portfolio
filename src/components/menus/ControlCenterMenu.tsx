import React from "react";
import { music } from "~/configs";

interface SliderProps {
  icon: string;
  value: number;
  setValue: (value: number) => void;
}

const SliderComponent = ({ icon, value, setValue }: SliderProps) => (
  <div className="slider flex">
    <div
      className="size-7 flex-center bg-white backdrop-blur-sm"
      border="t l b border-gray-600 rounded-l-full"
    >
      <span className={`${icon} text-xs text-white`} />
    </div>
    <div className="slider-wrapper" style={{ "--value": value } as React.CSSProperties}>
      <div className="slider-fill" />
      <input
        type="range"
        min={1}
        max={100}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="slider-input"
      />
    </div>
  </div>
);

interface CCMProps {
  toggleControlCenter: () => void;
  toggleAudio: (target: boolean) => void;
  setBrightness: (value: number) => void;
  setVolume: (value: number) => void;
  playing: boolean;
  btnRef: React.RefObject<HTMLDivElement>;
}

export default function ControlCenterMenu({
  toggleControlCenter,
  toggleAudio,
  setBrightness,
  setVolume,
  playing,
  btnRef
}: CCMProps) {
  const controlCenterRef = useRef<HTMLDivElement>(null);
  const { dark, wifi, brightness, bluetooth, airdrop, fullscreen, volume } = useStore(
    (state) => ({
      dark: state.dark,
      wifi: state.wifi,
      brightness: state.brightness,
      bluetooth: state.bluetooth,
      airdrop: state.airdrop,
      fullscreen: state.fullscreen,
      volume: state.volume
    })
  );
  const { toggleWIFI, toggleBluetooth, toggleAirdrop, toggleDark, toggleFullScreen } =
    useStore((state) => ({
      toggleWIFI: state.toggleWIFI,
      toggleBluetooth: state.toggleBluetooth,
      toggleAirdrop: state.toggleAirdrop,
      toggleDark: state.toggleDark,
      toggleFullScreen: state.toggleFullScreen
    }));

  useClickOutside(controlCenterRef, toggleControlCenter, [btnRef]);

  return (
    <div
      className="w-80 h-96 max-w-full shadow-menu p-2.5 text-white bg-black/20 backdrop-blur-2xl"
      pos="fixed top-9.5 right-0 sm:right-1.5"
      border="~ border-gray-700 rounded-2xl"
      grid="~ cols-4 rows-5 gap-2"
      ref={controlCenterRef}
    >
      <div className="bg-black/20 backdrop-blur-2xl rounded-xl row-span-2 col-span-2 p-2 flex flex-col justify-around">
        <div className="hstack space-x-2">
          <div
            className={`flex-center rounded-full size-8 ${
              wifi ? "text-white bg-blue-500" : "text-gray-400 bg-gray-600/30"
            }`}
            onClick={toggleWIFI}
          >
            <span className="i-material-symbols:wifi text-base" />
          </div>
          <div p="t-0.5">
            <div className="font-medium leading-4 text-white">Wi-Fi</div>
            <div className="text-xs text-gray-400">{wifi ? "Home" : "Off"}</div>
          </div>
        </div>
        <div className="hstack space-x-2">
          <div
            className={`flex-center rounded-full size-8 ${
              bluetooth ? "text-white bg-blue-500" : "text-gray-400 bg-gray-600/30"
            }`}
            onClick={toggleBluetooth}
          >
            <span className="i-charm:bluetooth text-base" />
          </div>
          <div p="t-0.5">
            <div className="font-medium leading-4 text-white">Bluetooth</div>
            <div className="text-xs text-gray-400">{bluetooth ? "On" : "Off"}</div>
          </div>
        </div>
        <div className="hstack space-x-2">
          <div
            className={`flex-center rounded-full size-8 ${
              airdrop ? "text-white bg-blue-500" : "text-gray-400 bg-gray-600/30"
            }`}
            onClick={toggleAirdrop}
          >
            <span className="i-material-symbols:rss-feed-rounded text-base" />
          </div>
          <div p="t-0.5">
            <div className="font-medium leading-4 text-white">AirDrop</div>
            <div className="text-xs text-gray-400">{airdrop ? "Contacts Only" : "Off"}</div>
          </div>
        </div>
      </div>
      <div className="bg-black/20 backdrop-blur-2xl rounded-xl col-span-2 p-2 hstack space-x-3">
        <div
          className={`flex-center rounded-full size-8 ${
            dark ? "text-white bg-blue-500" : "text-gray-400 bg-gray-600/30"
          }`}
          onClick={toggleDark}
        >
          {dark ? (
            <span className="i-ion:moon text-base" />
          ) : (
            <span className="i-ion:sunny text-base" />
          )}
        </div>
        <div className="font-medium text-white">{dark ? "Dark Mode" : "Light Mode"}</div>
      </div>
      <div className="bg-black/20 backdrop-blur-2xl rounded-xl flex-center flex-col">
        <span className="i-bi:brightness-alt-high text-xl text-white" />
        <span className="text-xs text-center text-gray-400" font="leading-3.5">
          Keyboard Brightness
        </span>
      </div>
      <div
        className="bg-black/20 backdrop-blur-2xl rounded-xl flex-center flex-col cursor-default"
        onClick={() => toggleFullScreen(!fullscreen)}
      >
        {fullscreen ? (
          <span className="i-bi:fullscreen-exit text-base text-white" />
        ) : (
          <span className="i-bi:fullscreen text-base text-white" />
        )}
        <span className="text-xs text-center text-gray-400" font="leading-3.5" m="t-1.5">
          {fullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
        </span>
      </div>
      <div className="bg-black/20 backdrop-blur-2xl rounded-xl col-span-4 px-2.5 py-2 space-y-1 flex flex-col justify-around">
        <span className="font-medium ml-0.5 text-white">Display</span>
        <SliderComponent icon="i-ion:sunny" value={brightness} setValue={setBrightness} />
      </div>
      <div className="bg-black/20 backdrop-blur-2xl rounded-xl col-span-4 px-2.5 py-2 space-y-1 flex flex-col justify-around">
        <span className="font-medium ml-0.5 text-white">Sound</span>
        <SliderComponent icon="i-ion:volume-high" value={volume} setValue={setVolume} />
      </div>
      <div className="bg-black/20 backdrop-blur-2xl rounded-xl col-span-4 hstack space-x-2.5" p="y-2 l-2 r-4">
        <img className="w-12 rounded-lg" src={music.cover} alt="cover art" />
        <div flex-1>
          <div className="font-medium text-white">{music.title}</div>
          <div className="text-xs text-gray-400">{music.artist}</div>
        </div>
        {playing ? (
          <span
            className="i-bi:pause-fill text-2xl text-white cursor-pointer"
            onClick={() => toggleAudio(false)}
          />
        ) : (
          <span
            className="i-bi:play-fill text-2xl text-white cursor-pointer"
            onClick={() => toggleAudio(true)}
          />
        )}
      </div>
    </div>
  );
}
