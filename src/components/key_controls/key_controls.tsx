import "./key_controls.css";
import { useRecoilState } from "recoil";
import { isDarkState } from "../../recoil/atoms";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface KeyControlsProps {
  hasScrolled: boolean;
}

const KeyControls = ({ hasScrolled }: KeyControlsProps) => {
  const [isDark, setIsDark] = useRecoilState<boolean>(isDarkState);
  const [isShown, setIsShown] = useState<boolean>(true);
  const navigate = useNavigate();

  // called when "1" key is pressed, scrolls to featured work section
  const scrollToWork = () => {
    const featuredDiv = document.getElementById("featured");
    if (featuredDiv) {
      featuredDiv.scrollIntoView({ behavior: "smooth" });
    }
  };

  // called when "t" key is pressed, scrolls to top of page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // actions for different keys defined here
  const keyActions: { [key: string]: () => void } = {
    // "0": () => navigate("/"),
    "1": () => {
      navigate("/#work");
      setTimeout(() => {
        scrollToWork();
      }, 50);
    },
    "2": () => navigate("/about"),
    "3": () => {
      setTimeout(() => {
        window.open(
          "https://anna-wang.dev/assets/resume-D2k9VXnM.pdf",
          "_blank"
        );
      }, 300); // short delay added so keyup event can be registered in time
    },
    d: () => setIsDark((prevIsDark) => !prevIsDark),
    t: scrollToTop,
    h: () => setIsShown((prev) => !prev),
  };

  // listens for keydown and keyup and handles actions accordingly
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // check if the key exists in keyActions and execute the corresponding action
      if (keyActions[e.key]) {
        keyActions[e.key]();
      }

      if (e.key === "0" || e.key === "1" || e.key === "2" || e.key === "3") {
        const key = document.querySelector(`[data-key="${e.key}"]`);
        if (key && !key.classList.contains("clicked")) {
          key.classList.add("clicked");
        }
      } else {
        const key = document.querySelector(`.${e.key}`);
        if (key && !key.classList.contains("clicked")) {
          key.classList.add("clicked");
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      // handle removing "clicked" class for keys
      if (e.key === "0" || e.key === "1" || e.key === "2" || e.key === "3") {
        const key = document.querySelector(`[data-key="${e.key}"]`);
        if (key && key.classList.contains("clicked")) {
          key.classList.remove("clicked");
        }
      } else {
        const key = document.querySelector(`.${e.key}`);
        if (key && key.classList.contains("clicked")) {
          key.classList.remove("clicked");
        }
      }
    };

    // add event listeners for keydown and keyup
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // cleanup function to remove event listeners on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [navigate, setIsDark, isShown]);

  return (
    <div className="key-controls">
      <div
        // if key controls are hidden, set justify-content to end
        className={`control-wrapper ${isShown ? "" : "control-wrapper-hidden"}`}
      >
        {isShown ? (
          <>
            <div className={`left ${isDark ? "left-dark" : "left-light"}`}>
              <div className="keys-label">
                <ul className="keys">
                  <li>
                    <div className="ArrowUp" />
                  </li>
                  <li>
                    <div className="ArrowDown" />
                  </li>
                </ul>
                <div className="control-label">Scroll</div>
              </div>
              <div className="keys-label">
                <ul className="keys">
                  {/* <div data-key="0" /> */}
                  <li>
                    <div data-key="1" onClick={keyActions["1"]} />
                  </li>
                  <li>
                    <div data-key="2" onClick={keyActions["2"]} />
                  </li>
                  <li>
                    <div data-key="3" onClick={keyActions["3"]} />
                  </li>
                </ul>
                <div className="control-label">Navigate to Section</div>
              </div>
              <div className="keys-label">
                <ul className="keys">
                  <li>
                    <div className="d" onClick={keyActions["d"]} />
                  </li>
                </ul>
                <div className="control-label">
                  {isDark ? "Light Mode" : "Dark Mode"}
                </div>
              </div>
              {hasScrolled && (
                <div className="keys-label">
                  <ul className="keys">
                    <li>
                      <div className="t" onClick={keyActions["t"]} />
                    </li>
                  </ul>
                  <div className="control-label">Back to Top</div>
                </div>
              )}
            </div>
            <div className={`right ${isDark ? "right-dark" : "right-light"}`}>
              <div className="right-keys-label">
                <ul className="keys">
                  <li>
                    <div className="h" onClick={keyActions["h"]} />
                  </li>
                </ul>
                <div className="control-label">Hide</div>
              </div>
            </div>
          </>
        ) : (
          // if key controls are hidden, only display show option
          <div className={`right ${isDark ? "right-dark" : "right-light"}`}>
            <div className="right-keys-label">
              <ul className="keys">
                <div className="h" onClick={keyActions["h"]} />
              </ul>
              <div className="control-label">Show</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default KeyControls;
