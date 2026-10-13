import { Heading } from "./components/Heading";

import "./styles/theme.css";
import "./styles/global.css";
import {
  CogIcon,
  RotateCcwClockIcon,
  SettingsIcon,
  SunIcon,
  TimerIcon,
} from "lucide-react";

export function App() {
  return (
    <>
      <Heading>
        Olá mundo 1{" "}
        <button>
          <TimerIcon />
        </button>
        <button>
          <RotateCcwClockIcon />
        </button>
        <button>
          <SettingsIcon />
        </button>
        <button>
          <SunIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum cumque
        incidunt accusamus commodi quasi sit, doloribus in fugiat, repellat
        laudantium voluptas praesentium labore dolore unde! Aliquam, dolorem! A,
        quia rerum!
      </p>
    </>
  );
}
