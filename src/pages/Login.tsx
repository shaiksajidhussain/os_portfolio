import React from "react";
import { format } from "date-fns";
import { wallpapers, user } from "~/configs";
import Battery from "~/components/menus/Battery";
import type { MacActions } from "~/types";

export default function Login(props: MacActions) {
  const [password, setPassword] = useState("");
  const [sign, setSign] = useState("Press Enter to Login");
  const [currentTime, setCurrentTime] = useState(new Date());
  const dark = useStore((state) => state.dark);
  const { wifi } = useStore((state) => ({ wifi: state.wifi }));

  useInterval(() => {
    setCurrentTime(new Date());
  }, 1000);

  const keyPress = (e: React.KeyboardEvent) => {
    const keyCode = e.key;
    if (keyCode === "Enter") {
      e.preventDefault();
      loginHandle();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const loginHandle = useCallback(() => {
    if (user.password === "" || user.password === password) {
      // not set password or password correct
      props.setLogin(true);
    } else if (password !== "") {
      // password not null and incorrect
      setSign("Incorrect password");
      setTimeout(() => {
        setSign("Press Enter to Login");
        setPassword("");
      }, 2000);
    } else {
      // No password entered, just unlock if no password is set
      if (user.password === "") {
        props.setLogin(true);
      }
    }
  }, [password, props]);

  // Handle Enter key press on the entire screen
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        loginHandle();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [loginHandle]);

  const formattedDate = format(currentTime, "EEEE, d MMMM");
  const formattedTime = format(currentTime, "h:mm");

  return (
    <div
      className="size-full login relative overflow-hidden cursor-pointer"
      style={{
        background: `url(${
          dark ? wallpapers.night : wallpapers.day
        }) center/cover no-repeat`
      }}
      onClick={loginHandle}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          loginHandle();
        }
      }}
      tabIndex={0}
    >
      {/* Status Bar - Top Right */}
      <div className="absolute top-4 right-4 flex items-center space-x-2 text-white text-sm">
        <span className="text-xs">ABC-India</span>
        {wifi ? (
          <span className="i-material-symbols:wifi text-base" />
        ) : (
          <span className="i-material-symbols:wifi-off text-base" />
        )}
        <Battery />
        <span className="i-material-symbols:lock text-base" />
      </div>

      {/* Time and Date - Top Center */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center text-white">
        <div className="text-2xl font-normal mb-1">{formattedDate}</div>
        <div className="text-8xl font-bold">{formattedTime}</div>
      </div>

      {/* User Info - Bottom Center */}
      <div className="absolute bottom-48 left-1/2 transform -translate-x-1/2 text-center">
        {/* Avatar */}
        <img
          className="rounded-full size-20 my-0 mx-auto mb-3"
          src="https://res.cloudinary.com/dgus6y6lm/image/upload/v1765269863/shaiksajidhussain_r3vla0.jpg"
          alt="img"
        />
        <div className="font-medium text-lg text-white mb-1 lowercase">{user.name}</div>
        <div className="text-sm text-white/80 mb-4">{sign}</div>

        {/* Password Input */}
        <div
          className="mx-auto grid grid-cols-5 w-64 h-10 rounded-full backdrop-blur-2xl bg-black/20 border border-white/20"
          onClick={(e) => e.stopPropagation()}
        >
          <input
            className="text-sm text-white col-start-1 col-span-4 no-outline bg-transparent px-3 placeholder-white/50"
            type="password"
            placeholder="Enter Password"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => {
              e.stopPropagation();
              keyPress(e);
            }}
            value={password}
            onChange={handleInputChange}
            autoFocus
          />
          <div className="col-start-5 col-span-1 flex-center">
            <span className="i-material-symbols:lock text-white text-base" />
          </div>
        </div>
      </div>

      {/* buttons */}
      <div className="text-sm fixed bottom-16 inset-x-0 mx-auto flex flex-row space-x-4 w-max">
        <div
          className="hstack flex-col text-white w-24 cursor-pointer"
          onClick={(e) => props.sleepMac(e)}
        >
          <div className="flex-center size-10 bg-black/30 backdrop-blur-xl rounded-full border border-white/20">
            <span className="i-gg:sleep text-[40px]" />
          </div>
          <span>Sleep</span>
        </div>
        <div
          className="hstack flex-col text-white w-24 cursor-pointer"
          onClick={(e) => props.restartMac(e)}
        >
          <div className="flex-center size-10 bg-black/30 backdrop-blur-xl rounded-full border border-white/20">
            <span className="i-ri:restart-line text-4xl" />
          </div>
          <span>Restart</span>
        </div>
        <div
          className="hstack flex-col text-white w-24 cursor-pointer"
          onClick={(e) => props.shutMac(e)}
        >
          <div className="flex-center size-10 bg-black/30 backdrop-blur-xl rounded-full border border-white/20">
            <span className="i-ri:shut-down-line text-4xl" />
          </div>
          <span>Shut Down</span>
        </div>
      </div>
    </div>
  );
}
