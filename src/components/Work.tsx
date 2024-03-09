import "../styles/Work.css";
import redesigned from "../../public/redesigned.png";
import original from "../../public/original.png";
import accessibility from "../../public/accessibility.png";
import speedSketches from "../../public/speed_sketches.png";
import finalSketch from "../../public/final_sketch.png";
import deskWire from "../../public/desktop_wireframe.png";
import tabWire from "../../public/tablet_wireframe.png";
import mobWire from "../../public/mobile_wireframe.png";
import guide from "../../public/guide.png";
import deskHifi from "../../public/desktop_hifi.png";
import tabHifi from "../../public/tablet_hifi.png";
import mobHifi from "../../public/mobile_hifi.png";
import monitor from "../../public/monitor.png";
import tablet from "../../public/tablet.png";
import mobile from "../../public/mobile.png";

function Work() {
  return (
    <>
      <main className="work">
        <div className="work-content">
          <section className="overview">
            <div className="grouping">
              <h1>Beestar.org</h1>
              <div className="subheading">
                Responsive Redesign | Spring 2024
              </div>
            </div>
            <div className="grouping">
              <p>
                In this project, I redesigned{" "}
                <a
                  href="https://www.beestar.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Beestar.org
                </a>
                , a site that offers both free and paid programs for students
                K-8, supplementing learning in language arts, math, science,
                among other subjects. I chose this website because I used to be
                a part of their free math program in elementary school, which
                had great content, but the interface was confusing and hard to
                navigate.
              </p>
              <p>
                I focused on redesigning the home page, which needed to
                accomodate both new and existing users. After identifying
                accessibility and usability issues, I created sketches, lo-fi
                wireframes, and a hi-fi prototype in Figma. Finally, I developed
                the new, responsive website, equipped with a modernized UI to
                support a broad range of screen dimensions.
              </p>
            </div>
            <a
              href="https://awang1245.github.io/beestar-responsive-redesign/"
              target="_blank"
              rel="noopener noreferrer"
              className="redesigned-img"
            >
              <img src={redesigned} />
            </a>
          </section>
          <section className="issues">
            <h2>Identifying the Problem</h2>
            <div className="split">
              <div className="details">
                <h3>Observations</h3>
                <ul className="details-list">
                  <li>
                    There is limited color contrast throughout the webpage.
                  </li>
                  <li>
                    The site has minimal entry points to guide the user's
                    reading pattern due to inconsistent usages in colors and
                    font sizes.
                  </li>
                  <li>
                    There are long, dense chunks of text affecting the site's
                    readability and efficiency, especially for new users.
                  </li>
                  <li>
                    Gestalt principles are utilized in the shapes and groupings
                    of different elements, but the site is not clearly visually
                    sectioned off which can make navigation confusing.
                  </li>
                  <li>
                    The site lacks affordances informing the user what elements
                    can be interacted with. None of the buttons have hover or
                    click animations. Some are flat, while others have box
                    shadows that are also found on noninteractive elements.
                  </li>
                </ul>
              </div>
              <a
                href="https://www.beestar.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="original-img"
              >
                <img src={original} />
              </a>
            </div>
            <div className="split">
              <a
                href="https://wave.webaim.org/report#/https://www.beestar.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="original-img"
              >
                <img src={accessibility} />
              </a>
              <div className="details">
                <h3>Accessibility Concerns</h3>
                <p className="description">
                  After running the original site through WebAIM WAVE, the
                  following issues with accessibility were identified:
                </p>
                <ul className="details-list">
                  <li>
                    Major low contrast issues with the navigation bar, making
                    readability difficult for users with low vision.
                  </li>
                  <li>
                    The site is missing alternative text for most of the smaller
                    images on the site, making these elements unavailable to
                    screenreaders.
                  </li>
                  <li>
                    The site description has fully justified text which creates
                    readability issues on varying screen sizes.
                  </li>
                  <li>
                    The interactive elements on the site are unavailable to both
                    mouse and keyboard users, making navigation inaccessible for
                    those with mobility issues.
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="design">
            <h2>Redesign Process</h2>
            <div className="design-content">
              <h3>Initial Sketches</h3>
              <div className="sketches">
                <div className="half-screen">
                  <img src={speedSketches} />
                </div>
                <div className="half-screen">
                  <img src={finalSketch} />
                </div>
              </div>
              <p className="description">
                Starting off the design process, I made nine speed sketches to
                brainstorm ways to best showcase Beestar's different program and
                subject offerings. I mostly experimented with more traditional
                elements such as vertical layouts, grids, carousels, and
                sidebars.
              </p>
              <p className="description">
                I liked the top right sketch the most, as it gives the user an
                overview of all of Beestar's programs offerings in a left
                sidebar, while details about each program and resources for each
                are shown to the right. I refined it into a final sketch, while
                also incorporating some elements from the others.
              </p>
            </div>
            <div className="design-content">
              <h3>Lo-Fi Wireframes</h3>
              <div className="images">
                <img src={deskWire} className="redesigned-img" />
                <div className="sketches">
                  <div className="half-screen">
                    <img src={tabWire} />
                  </div>
                  <div className="half-screen">
                    <img src={mobWire} />
                  </div>
                </div>
              </div>
              <p className="intro-list">
                Going off of my final sketch, I created lo-fi wireframes for
                three screen sizes: desktop, tablet, and mobile. My main
                objective here was to figure out how I wanted the page structure
                and information architecture to looks across different
                dimensions. To highlight some of my key design choices:
              </p>
              <ul className="details-list">
                <li>
                  Increased visibility of the navigation bar and interactive
                  elements using combination of white text and a much darker
                  blue background. For smaller screens, the navigation bar
                  becomes a hamburger menu.
                </li>
                <li>
                  Different colors and headings are used to identify different
                  sections and elements on the page and create entry points for
                  the user.
                </li>
                <li>
                  Made the welcome description more concise as a whole, while
                  emphasizing the first sentence for better visual hierarchy.
                </li>
                <li>
                  Rather than having many buttons solely redirecting the user,
                  the programs section was overhauled to give the user a more
                  comprehensive first look at the content, grade levels, and
                  registration for each program.
                </li>
                <li>
                  For responsiveness, the programs sidebar becomes a horizontal
                  scrolling window and the grade cards are simplified.
                </li>
              </ul>
            </div>
            <div className="design-content">
              <h3>Hi-Fi Prototypes</h3>
              <div className="screens">
                <div className="smaller-screens">
                  <img src={tabHifi} className="tablet-img" />

                  <img src={mobHifi} className="mobile-img" />
                </div>
                <a
                  href="https://www.figma.com/proto/HwQfYuhn5fPOSoCXn83LFC/Anna-Wang-Responsive-Redesign?type=design&node-id=45-568&t=Xv1KNFD9kodZr5h4-1&scaling=scale-down&page-id=27%3A35&starting-point-node-id=45%3A568&mode=design"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="desktop-img"
                >
                  <img src={deskHifi} />
                </a>
              </div>
              <p className="intro-list">
                At this stage, I was mostly concerned with the feel and
                usability of the site, deciding on colors, font sizes, and
                interactions. My final designs were mostly faithful to the
                lo-fi, but I also needed to consider the layout of the full
                page. Click on the desktop version to check out the Figma
                prototype!
              </p>
              <ul className="details-list">
                <li>
                  I took inspiration from the blues and yellows in the Beestar
                  logo, along with a few accent colors to give the site a
                  playful look, since it is primarily used by younger students.
                </li>
                <li>
                  I moved the register button to the welcome section, as I felt
                  it was an important element for both new and existing users to
                  see when first opening the site.
                </li>
                <li>
                  I realized that displaying all grades at once could be
                  overwhelming to the user, which I resolved by adding an
                  expanding window.
                </li>
                <li>
                  The original webpage featured two excessively long columns of
                  text for the news and leaderboards, where some of the
                  information was over a decade old and irrelevant to new users.
                  To address this, I condensed them into one section that
                  displays only recent announcements and redirects users to a
                  separate page for the news/leaderboards.
                </li>
              </ul>
            </div>
            <div className="design-content">
              <h3>Visual Design Style Guide</h3>
              <div className="screens">
                <img className="full-img" src={guide} />
              </div>
            </div>
          </section>
          <section className="design">
            <h2>Development</h2>
            <div className="design-content">
              <div className="images">
                <div className="top-final">
                  <div className="tablet-final">
                    <img src={tablet} className="tablet-img" />
                  </div>
                  <a
                    href="https://www.figma.com/proto/HwQfYuhn5fPOSoCXn83LFC/Anna-Wang-Responsive-Redesign?type=design&node-id=45-568&t=Xv1KNFD9kodZr5h4-1&scaling=scale-down&page-id=27%3A35&starting-point-node-id=45%3A568&mode=design"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="desktop-final"
                  >
                    <img src={redesigned} />
                  </a>
                </div>
                <div className="bottom-final">
                  <div className="mobile-final">
                    <img src={mobile} className="mobile-img" />
                  </div>
                  <div className="monitor-final">
                    <img src={monitor} />
                  </div>
                </div>
              </div>
              <p className="description">
                Starting off the design process, I made nine speed sketches to
                brainstorm ways to best showcase Beestar's different program and
                subject offerings. I mostly experimented with more traditional
                elements such as vertical layouts, grids, carousels, and
                sidebars.
              </p>
              <p className="description">
                I liked the top right sketch the most, as it gives the user an
                overview of all of Beestar's programs offerings in a left
                sidebar, while details about each program and resources for each
                are shown to the right. I refined it into a final sketch, while
                also incorporating some elements from the others.
              </p>
            </div>
          </section>
          <section className="design">
            <h2>Conclusion</h2>
            <p className="description">
              I liked the top right sketch the most, as it gives the user an
              overview of all of Beestar's programs offerings in a left sidebar,
              while details about each program and resources for each are shown
              to the right. I refined it into a final sketch, while also
              incorporating some elements from the others.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}

export default Work;