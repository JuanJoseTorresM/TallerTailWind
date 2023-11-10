import daniel from "./assets/images/image-daniel.jpg";
import jonathan from "./assets/images/image-jonathan.jpg";
import jean from "./assets/images/image-jeanette.jpg";
import pat from "./assets/images/image-patrick.jpg";
import kira from "./assets/images/image-kira.jpg";



const App = () => {
  return (
    <div className="bg-gray-200 min-h-screen py-6 px-4">
      <div className="bg-violet-600 rounded-md ">
        <div className="flex gap-4 px-1 py-6">
          <img className="rounded-full" src={daniel} />
          <div>
            <p className="text-white">Daniel Clifford</p>
            <p className="text-gray-400">Verified Graduate</p>

          </div>
        </div>
        <article>
          <div className="text-white font-semibold text-2xl ">
            <p>I recivied a job offer mid-</p>
            <p>course, and the subject I</p>
            <p>learned were current, if not more</p>
            <p>so, in the company I joined. I</p>
            <p>honestly fell I got every pennys worth</p>
            <p>I recivied a job offer mid-</p>
          </div>
        </article>
        <article className="py-4">
          <div className="text-gray-400">

            <p>"I was an EMT for many years before I joined the</p>
            <p>bootcamp. rve been looking to make a transition</p>
            <p>and have heard some people who had an</p>
            <p>amazing experience here. I signed up for the</p>
            <p>free intro course and found it incredibly fun!</p>
            <p>enrolled shortly thereafter. The next 12 weeks</p>
            <p>was the best - and most gruelinq - time of my</p>
            <p>life. Since completing the course, l've</p>
            <p>successfully switched careers, working as a</p>
            <p>Software Engineer at a VR startup."</p>
          </div>

        </article>
      </div >
      <div className="bg-gray-600 rounded-md my-6 py-6 px-4">
        <div className="flex gap-4">
          <img className="rounded-full" src={jonathan} />
          <div>
            <p className="text-white">Jonathan Walters</p>
            <p className="text-gray-400">Verified Graduate</p>
          </div>
        </div>
        <article>
          <div className="text-white font-semibold text-2xl py-4">
            <p>The team was very supportive</p>
            <p>and kept me motivated</p>

          </div>
        </article>

        <article className="py-4">
          <div className="text-gray-400">
            <p>"I started as a total newbie with virtually no coding</p>
            <p>skills. I now work as a mobile engineer for a big</p>
            <p>company. This was one of the best investments l've</p>
            <p>made in myself. "</p>
          </div>
        </article>
      </div>


      <div className="bg-white rounded-md border-b border-b-gray-400 m-2 py-6 px-4">
        <div className="flex gap-4">
          <img className="rounded-full" src={jean} />
          <div>
            <p className="text-black">Jeanette Harmon</p>
            <p className="text-gray-400">Verified Graduate</p>
          </div>
        </div>
        <article>
          <div className="text-black font-semisemibold text-2xl py-4">
            <p>An overall wonderful and</p>
            <p>rewarding experience</p>

          </div>
        </article>

        <article className="py-4">
          <div className="text-gray-400">
            <p>"Thank you for the wonderful experience! I now</p>
            <p>have ajob I really enjoy, and make a good living</p>
            <p>while doing something I lave. "</p>
          </div>
        </article>
      </div >

      <div className="bg-black rounded-md border-b border-b-gray-400 my-6 py-6 px-4">
        <div className="flex gap-4">
          <img className="rounded-full" src={pat} />
          <div>
            <p className="text-white ">Patrick Abrams</p>
            <p className="text-gray-400">Verified Graduate</p>
          </div>
        </div>
        <article>
          <div className="text-white font-semisemibold text-2xl py-4">
            <p>Awesome teaching support from</p>
            <p>TAS who did the bootcamp</p>
            <p>themselves. Getting guidance</p>
            <p>from them and learning from</p>
            <p>their experiences was easy.</p>

          </div>
        </article>

        <article className="py-4">
          <div className="text-gray-400">
            <p>"The staff seem genuinely concerned about my</p>
            <p>progress which I find really refreshing. The</p>
            <p>program gave me the confidence necessary to be</p>
            <p>able to go out in the world and present myself as a</p>
            <p>capable junior developer. The standard is above the</p>
            <p>rest. You Will get the personal attention you need</p>
            <p>from an incredible community of smart and</p>
            <p>amazing people."</p>
          </div>
        </article>
      </div >

      <div className="bg-white rounded-md border-b border-b-gray-400 my-6 py-6 px-4">
        <div className="flex gap-4">
          <img className="rounded-full" src={kira} />
          <div>
            <p className="text-black">Kira Whittle</p>
            <p className="text-gray-400">Verified Graduate</p>
          </div>
        </div>
        <article>
          <div className="text-black font-semisemibold text-2xl py-4">
            <p>Such a life-changing experience.</p>
            <p>Highly recommended!</p>

          </div>
        </article>

        <article className="py-4">
          <div className="text-gray-400">
            <p>"Before joining the bootcamp, rve never written a</p>
            <p>line of code, I needed some structure from</p>
            <p>professionals who can help me learn programming</p>
            <p>step by step. I was encouraged to enroll by a</p>
            <p>former student of theirs who can only say</p>
            <p>wonderful things about the program. The entire</p>
            <p>curriculum and staff did not disappoint. They were</p>
            <p>very hands-on and I never had to wait long for</p>
            <p>assistance. The agile team project, in particular,</p>
            <p>was outstanding. It took my learning to the next</p>
            <p>level in a way that no tutorial could ever have. In</p>
            <p>fact, l've often referred to it during interviews as an</p>
            <p>example of my developent experience. It certainly</p>
            <p>helped me land a job as a full-stack developer after</p>
            <p>receiving multiple offers. 100% recommend!"</p>
          </div>
        </article>
      </div >
    </div >
  );
};
export default App;