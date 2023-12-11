import React, { useState } from "react";
import "./Resources.css"; // Import a separate CSS file for styling

function OtherPage() {
  const accordionSections = [
    {
      id: "section1",
      title: "Top Resources (each leads to many more resources)",
    },
    { id: "section2", title: "General Resources" },
    { id: "section3", title: "General Conference" },
    { id: "section4", title: "Articles" },
    { id: "section5", title: "Depression" },
    { id: "section6", title: "Suicide" },
    { id: "section7", title: "Church Videos" },
    // Add more sections as needed
  ];

  const [activeSection, setActiveSection] = useState(null);

  const handleSectionClick = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const renderContent = (section) => {
    switch (section) {
      case "section1":
        return (
          <div>
            <ul>
              <li>
                <a
                  href="https://www.churchofjesuschrist.org/get-help/mental-health/?lang=eng"
                  title="Mental Health"
                  target="_blank"
                >
                  Church of Jesus Christ - Page on Mental Health
                </a>
              </li>
              <li>
                <a
                  href="https://www.churchofjesuschrist.org/search?lang=eng&amp;query=mental%20health&amp;highlight=true&amp;page=1&amp;facet=general-conference"
                  title="General Conference"
                  target="_blank"
                >
                  Church of Jesus Christ - All General Conference Talks on
                  Mental Health
                </a>
              </li>
              <li>
                <a
                  href="https://www.churchofjesuschrist.org/search?highlight=true&amp;lang=eng&amp;page=1&amp;query=mental+health&amp;type=video"
                  title="Health"
                  target="_blank"
                >
                  Church of Jesus Christ - Videos on Mental Health
                </a>
              </li>
              <li>
                <a
                  href="https://www.churchofjesuschrist.org/search?highlight=true&amp;lang=eng&amp;query=mental+health&amp;type=image"
                  title="Mental Health"
                >
                  Church of Jesus Christ - Images on Mental Health
                </a>
              </li>
              <li>
                <a
                  href="https://www.churchofjesuschrist.org/search?highlight=true&amp;lang=eng&amp;page=1&amp;query=mental+health&amp;type=music"
                  title="Mental Health"
                  target="_blank"
                >
                  Church of Jesus Christ - Music that talks about Mental Health
                </a>
              </li>
              <li>
                <a
                  href="https://www.churchofjesuschrist.org/search?lang=eng&amp;query=mental%20health&amp;highlight=true&amp;page=1&amp;facet=news-and-events"
                  title="Mental Health"
                  target="_blank"
                >
                  Church of Jesus Christ - Mental Health in the Church News
                </a>
              </li>
              <li>
                <a
                  href="https://www.churchofjesuschrist.org/search?lang=eng&amp;query=mental%20health&amp;highlight=true&amp;page=1&amp;facet=manuals"
                  title="Mental Health"
                  target="_blank"
                >
                  Church of Jesus Christ - Lessons in Church Manuals about
                  Mental Health
                </a>
              </li>
              <li>
                <a
                  href="https://www.churchofjesuschrist.org/search?facet=general-handbook&amp;highlight=true&amp;lang=eng&amp;page=1&amp;query=mental+health"
                  title="Health"
                  target="_blank"
                >
                  Church of Jesus Christ - Mental Health in the Church Handbook
                </a>
              </li>
              <li>
                <a
                  href="https://www.churchofjesuschrist.org/search?lang=eng&amp;query=mental%20health&amp;highlight=true&amp;page=1&amp;facet=all"
                  title="Mental Health"
                  target="_blank"
                >
                  Church of Jesus Christ - All Search Results on Mental Health
                </a>
              </li>
              <li>
                <a
                  href="http://margiesmessages.com/patiencenew.html"
                  title="Patience"
                  target="_blank"
                >
                  See also: Patience / Endurance
                </a>
              </li>
              <li>
                <a
                  href="https://www.lds.org/mentalhealth?lang=eng"
                  title="Added the mental health hotline link for areas"
                  target="_blank"
                >
                  *Need Help? Talk Now. (Find a Free Helpline in Your Area)
                </a>
              </li>
            </ul>
          </div>
        );
      case "section2":
        return (
          <div>
            <ul>
              <li>
                <a
                  href="https://www.lds.org/topics/families-and-individuals/lifes-challenges/hope-and-help?lang=eng&amp;old=true"
                  title="Hope and Help"
                  target="_blank"
                >
                  Hope and Help (Many Resources)
                </a>
              </li>
              <li>
                <a
                  href="https://www.lds.org/topics/disability/list/mental-illness?lang=eng"
                  title="Resources for Understanding Mental Illness"
                  target="_blank"
                >
                  Resources for Understanding Mental Illness
                </a>
              </li>
              <li>
                <a
                  href="https://www.churchofjesuschrist.org/study/ensign/1989/02/mental-illness-in-search-of-understanding-and-hope?lang=eng"
                  title="Mental Illness: In Search of Understanding and Hope"
                  target="_blank"
                >
                  Mental Illness: In Search of Understanding and Hope
                </a>
              </li>
              <li>
                <a
                  href="https://www.churchofjesuschrist.org/study/ensign/2005/10/myths-about-mental-illness?lang=eng"
                  title="Myths about Mental Illness"
                  target="_blank"
                >
                  Myths about Mental Illness
                </a>
              </li>
            </ul>
          </div>
        );
      case "section3":
        return (
          <div>
            <ul>
              <li>
                <a
                  href="https://www.churchofjesuschrist.org/study/general-conference/2022/04/23holland?lang=eng"
                  title="Fear Not: Believe Only!"
                  target="_blank"
                >
                  Fear Not: Believe Only! - Jeffrey R. Holland - April 2022
                </a>
              </li>
              <li>
                <a
                  href="https://www.lds.org/general-conference/2013/10/like-a-broken-vessel?lang=eng"
                  title="'Like a Broken Vessel' - Elder Jeffrey R. Holland - October 2013"
                  target="_blank"
                >
                  "Like a Broken Vessel" - Elder Jeffrey R. Holland
                </a>
              </li>
              <li>
                <a
                  href="https://www.lds.org/general-conference/2010/10/o-that-cunning-plan-of-the-evil-one?lang=eng&amp;_r=1"
                  title="Talk:  O that cumming plan of the evil one.  Mental Health.  Addiction."
                  target="_blank"
                >
                  "O That Cunning Plan of the Evil One" - M. Russell Ballard
                </a>
              </li>
              <li>
                <a
                  href="https://www.churchofjesuschrist.org/study/general-conference/2019/10/31aburto"
                  title="Thru Cloud and Sunshine, Lord, Abide with Me!"
                  target="_blank"
                >
                  Thru Cloud and Sunshine, Lord, Abide with Me! - Reuna I.
                  Aburto - October 2019
                </a>
              </li>
            </ul>
          </div>
        );
      case "section4":
        return (
          <div>
            <ul>
              <li>
                <a
                  href="https://www.lds.org/ensign/2001/10/easing-the-burdens-of-mental-illness?lang=eng&amp;_r=1"
                  title="'Easing the Burdens of Mental Illness' - October 2001 Ensign"
                  target="_blank"
                >
                  "Easing the Burdens of Mental Illness" - Ensign
                </a>
              </li>
              <li>
                <a
                  href="https://www.lds.org/ensign/2000/03/escaping-my-valley-of-sorrow?lang=eng&amp;_r=1"
                  title="'Escaping My Valley of Sorrow' - March 2000 Ensign"
                  target="_blank"
                >
                  "Escaping My Valley of Sorrow" - Ensign
                </a>
              </li>
              <li>
                <a
                  href="https://www.lds.org/ensign/1990/09/keeping-mentally-well?lang=eng&amp;_r=1"
                  title="'Keeping Mentally Well' - September 1990 Ensign"
                  target="_blank"
                >
                  "Keeping Mentally Well" - Ensign
                </a>
              </li>
              <li>
                <a
                  href="https://www.lds.org/ensign/1989/02/mental-illness-in-search-of-understanding-and-hope?lang=eng&amp;_r=1"
                  title="'Mental Illness: In Search of Understand and Hope' - February 1989 Ensign"
                  target="_blank"
                >
                  "Mental Illness: In Search of Understanding and Hope" - Ensign
                </a>
              </li>
              <li>
                <a
                  href="https://www.lds.org/ensign/2005/10/myths-about-mental-illness?lang=eng&amp;_r=1"
                  title="'Myths about Mental Illness' - Elder Alexander B. Morrison - October 2005 Ensign"
                  target="_blank"
                >
                  "Myths about Mental Illness" - Elder Alexander B. Morrison -
                  Ensign
                </a>
              </li>
            </ul>
          </div>
        );
      case "section5":
        return (
          <div>
            <ul>
              <li>
                <a
                  href="https://www.lds.org/ensign/1978/08/awake-my-soul-dealing-firmly-with-depression?lang=eng"
                  title="'Awake My Soul!': Dealing Firmly with Depression - August 1978 Ensign"
                  target="_blank"
                >
                  "Awake My Soul!": Dealing Firmly with Depression - Ensign
                </a>
              </li>
              <li>
                <a
                  href="https://www.lds.org/new-era/2016/09/dealing-with-depression?lang=eng"
                  title="Dealing with Depression"
                  target="_blank"
                >
                  "Dealing with Depression" - Sept. 2016 New Era
                </a>
              </li>
              <li>
                <a
                  href="https://www.lds.org/ensign/2016/02/depression?lang=eng"
                  title="'Depression' - February 2016 Ensign Article"
                  target="_blank"
                >
                  "Depression" - Feb. 2016 Ensign
                </a>
              </li>
              <li>
                <a
                  href="https://www.lds.org/church/news/depression-more-than-a-bad-hair-day?lang=eng"
                  title="'Depression: More than a Bad Hair Day' - Church News May 30, 2014"
                  target="_blank"
                >
                  "Depression: More than a Bad Hair Day" - Church News
                </a>
              </li>
              <li>
                <a
                  href="https://www.lds.org/ensign/1984/02/my-battle-with-depression?lang=eng&amp;_r=1"
                  title="'My Battle with Depression' - February 1984 Ensign"
                  target="_blank"
                >
                  "My Battle with Depression" - Ensign
                </a>
              </li>
              <li>
                <a
                  href="https://www.lds.org/new-era/2002/04/rising-above-the-blues?lang=eng&amp;_r=1"
                  title="'Rising Above the Blues' - April 2002 New Era"
                  target="_blank"
                >
                  "Rising Above the Blues" - New Era
                </a>
              </li>
              <li>
                <a
                  href="https://www.lds.org/ensign/2004/08/when-your-child-is-depressed?lang=eng&amp;_r=1"
                  title="'When Your Child is Depressed' - by Sean E. Brotherson - August 2004 Ensign"
                  target="_blank"
                >
                  "When Your Child is Depressed" - Sean E. Brotherson - Ensign
                </a>
              </li>
              <li>
                <a
                  href="https://www.lds.org/ensign/1990/03/why-is-my-wife-or-husband-depressed?lang=eng&amp;_r=1"
                  title="'Why is my Wife (or Husband) Depressed?' - March 1990 Ensign"
                  target="_blank"
                >
                  "Why is my Wife (or Husband) Depressed?" - Ensign
                </a>
              </li>
            </ul>
          </div>
        );
      case "section6":
        return (
          <div>
            <ul>
              <li>
                <a
                  href="https://www.lds.org/ensign/1987/10/suicide-some-things-we-know-and-some-we-do-not?lang=eng"
                  title="suicide - Russell Ballard"
                  target="_blank"
                  data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://www.lds.org/ensign/1987/10/suicide-some-things-we-know-and-some-we-do-not?lang%3Deng&amp;source=gmail&amp;ust=1481400145545000&amp;usg=AFQjCNFXaifAsn9n-jj39a-DQ_fYZCXBDQ"
                >
                  "Suicide:&nbsp; Some Things We Know, and Some We Do Not - M.
                  Russell Ballard - Ensign
                </a>
              </li>
              <li>
                <a
                  href="https://www.lds.org/preventingsuicide/?lang=eng"
                  title="Preventing Suicide"
                  target="_blank"
                  data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://www.lds.org/preventingsuicide/?lang%3Deng&amp;source=gmail&amp;ust=1481400145545000&amp;usg=AFQjCNFFV_psNxwXIskIWV32ZeIE6r6mYg"
                >
                  ChurchofJesusChrist.org:&nbsp; Preventing Suicide
                </a>
              </li>
              <li>
                <a
                  href="http://eom.byu.edu/index.php/Suicide"
                  title="suicide - encyclopedia of Mormonism"
                  target="_blank"
                  data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=http://eom.byu.edu/index.php/Suicide&amp;source=gmail&amp;ust=1481400145545000&amp;usg=AFQjCNELnLTcV9vK5RGvEJ30yEZTKAmexg"
                >
                  BYU:&nbsp; Encyclopedia of Mormonism
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=4qFQ4LuM8yI&amp;list=UUdNjexbIS_NKJC4ZRwKf9ag"
                  title="thoughts on suicide prevention"
                  target="_blank"
                  data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://www.youtube.com/watch?v%3D4qFQ4LuM8yI%26list%3DUUdNjexbIS_NKJC4ZRwKf9ag&amp;source=gmail&amp;ust=1481400145545000&amp;usg=AFQjCNHpoRqxHghljh46jwukoGNg6ZibjQ"
                >
                  The Church of Jesus Christ of Latter-day Saints: Sitting on
                  the Bench: Thoughts on Suicide Prevention
                </a>
              </li>
            </ul>
          </div>
        );
      case "section7":
        return (
          <div>
            <ul>
              <li>
                <a
                  href="https://www.churchofjesuschrist.org/media/collection/mental-health-life-help?lang=eng"
                  title="Personal struggles with depression and other mental health issues.  Videos."
                  target="_blank"
                >
                  {" "}
                  Several videos on people's personal struggles
                </a>
              </li>
            </ul>
          </div>
        );
      // Add more cases for additional sections

      default:
        return null;
    }
  };

  return (
    <div className="accordion-container">
      {accordionSections.map((section) => (
        <div className="accordion-section" key={section.id}>
          <button
            className={`accordion-button ${
              activeSection === section.id ? "active" : ""
            }`}
            onClick={() => handleSectionClick(section.id)}
          >
            {section.title} {activeSection === section.id ? "(-)" : "(+)"}
          </button>
          {activeSection === section.id && (
            <div className="accordion-content">{renderContent(section.id)}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default OtherPage;
