import * as React from 'react';
import 'intersection-observer';
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();
import { Head, Footer, Headline } from '@dailybruin/lux';
import Article from '../components/article';
import { Menu } from '../components/menu';
import Board from '../components/board';
import { ProgressContext } from '../contexts/contexts';
import Carousel from 'nuka-carousel';
import ScrollPercentage from 'react-scroll-percentage';

import Image1 from '../images/web.sp.dbcJoy.AN.jpg';
import Image2 from '../images/web.sp.dbcJoy.JS.picB.jpg';
import Image3 from '../images/web.sp.dbc.Cassidy.AA.jpg';
import Image4 from '../images/web.sp.dbcCassidy.AA.picB.jpg';
import Image5 from '../images/web.sp.dbcJacqueline.AN.jpg';
import Image6 from '../images/web.sp.dbcJacqueline.AN.picB.jpg';
import Image7 from '../images/web.sp.dbcgabe.DLB.jpg';
import Image8 from '../images/web.sp.dbcGabe.picB.DLB.jpg';
import Image9 from '../images/web.sp.dbcAngie.AL.jpg';
import Image10 from '../images/web.sp.dbcangie.AL.picB.jpg';

import Video1 from '../images/Alexa1.mp4';
import Video2 from '../images/Alexa2.mp4';
import Video3 from '../images/bbathletes.mp4';
import Video4 from '../images/nonbbathletes.mp4';


// Custom implementation
ScrollPercentage.calculatePercentage = (bounds, _) => {
  const vh = ScrollPercentage.viewportHeight()
  // When at page center, considered as entering
  return Math.max(0, Math.min(1, -(bounds.top - 0 * vh) / bounds.height));
}


interface IndexPageState {
  entries: any[];
  updateEntryPercent: Function;
  slides: any[];
  showSlides: boolean;
  slideIndex: number;
}

/*
 * Coverphoto
 */
class IndexPage extends React.Component<{}, IndexPageState> {
  constructor(props) {
    super(props);

    this.state = {
      entries: [
        {percent: 0, id: "test-0", title: "Drake Stadium"},
        {percent: 0, id: "test-1", title: "Wallis Annenberg Stadium"},
        {percent: 0, id: "test-2", title: "Janss Steps"},
        {percent: 0, id: "test-3", title: "Bruin Plaza"},
        {percent: 0, id: "test-4", title: "Pauley Pavillion"}
      ],
      updateEntryPercent: this.updateEntryPercent,
      slides: [],
      showSlides: false,
      slideIndex: 1,
    };
  }

  updateEntryPercent = (index, percent) => {
    const newEntries = this.state.entries.slice();
    if (index < newEntries.length) {
      newEntries[index].percent = percent;
      this.setState({ entries: newEntries });
    }
  };

  componentDidMount() {
    this.prepareSlides();
    this.setState({
      slideIndex: 0,
    });
  }

  prepareSlides() {
    // TODO: implement this
    this.setState({
      slides: [
        {title: "1st", src: "https://picsum.photos/200/300/?image=0"},
        {title: "2nd", src: "https://picsum.photos/200/300/?image=1"},
        {title: "3rd", src: "https://picsum.photos/200/300/?image=2"}
      ],
    });
  }

  article0 = () => {
    return(
    <div id={`test-0`}>
      <ScrollPercentage onChange={(v) => this.state.updateEntryPercent(0, v)}>
        <Headline text="10-year-old entrepreneur and cancer survivor returns to LA to run layups and raise money"/>
        <h5>By: Joy Hong</h5>
        <Article
          key={0}
          content={[
            {
              type: 'image',
              url: Image1,
              caption: `Alexa Kohler, a 10-year-old honorary captain at the 2018 Dribble for the Cure, learns to dribble from sophomore guard Kris Wilkes. Sunday was Alexa's fifth year participating in the annual event.`,
              credit: 'Alice Naland/Daily Bruin',
            },
            {
              type: 'text',
              value:
                `<p>Alexa Kohler swatted a ball from Kris Wilkes as they crossed the finish line together.</p>
                <p>He dropped the ball. </p>
                <p>“Ah, turnover,” said the UCLA men’s basketball sophomore guard. </p>
                <p>Alexa ran to retrieve the ball – something she couldn’t have done five years ago.</p>
                <p>While Dribble for the Cure participants raise money by collecting pledges from friends and family, 10-year-old Alexa Kohler sets up a lemonade stand every year to the raise money herself. Kohler battled brain cancer for a year in 2013, and has since participated in UCLA’s annual event.</p>
                <p>“We do some other (events) like Make a Wish, and those go to really good causes,” said her father Pete Kohler. “But this is one of the only ones we really like and come back to (every year) because the money is going to doctors for research to come up with better treatments.”</p>
                <p>Anything to improve medical advancement in pediatric cancer research has been a priority for the Kohler family. Karrie Kohler, Alexa’s mother, said it took nearly a year to confirm Alexa’s diagnosis.</p>
                <p>At first, frequent stomach and headaches resulted in doctors telling the family that her pain was due to allergies. Then they said getting her tonsils removed would solve the problem.</p>
                <p>But it didn’t.</p>
                <p>“I’d say for a good year, my husband and I took her from doctor to doctor,” Karrie Kohler said. “And after a year, we were like ‘Look, there’s something wrong.’ So they finally did an MRI, and that’s when we found out.”</p>
                <p>Alexa received six rounds of chemotherapy and 33 days of radiation – living at UCLA Mattel Children’s Hospital for about a year.</p>
                <p>“What we went through with Alexa, we quickly figure out that they don't have special pediatric cancer treatment,” Pete Kohler said. “They just get the same chemo that adults get.” </p>
                <p>The Kohler family – who resides in Las Vegas, Nevada – made the annual trip down to Los Angeles for the fifth time this year. </p>
                <p>Besides participating in the Dribble, Alexa and her family also visit the doctors and nurses from UCLA that helped her through the journey to remission.</p>
                <p>“She gets to meet some of the kids who also went though the same thing,” Karrie Kohler said. “We love the Dribble because Alexa just loves the basketball players and being able to walk with them.”</p>
                <p>Wilkes, along with women’s basketball freshmen guards Ahlana Smith and Kiara Jefferson, were assigned to the Kohler family to dribble the course together.</p>
                `
            },
            {
              type: 'image',
              url: Image2,
              caption: `Alexa stood up to applaud the winners who raised the most money at this year's Dribble for the Cure.`,
              credit: 'Jenna Nicole Smith/Daily Bruin',
            },
            {
              type: 'text',
              value:
                `<p>After crossing the finish line into Pauley Pavilion, Wilkes was determined to help Alexa make a layup.</p>
                <p>"(My favorite part was) dribbling with the basketball players," Alexa said. "It was fun."</p>
                <p>Alexa was named one of nine honorary captains – kids selected by Alice del Rosario, the Division Manager for pediatric hematology oncology. Each honorary captain is a current or former cancer patient at Mattel Children’s Hospital. </p>
                <p>"I just thought her story was really inspiring,” said Wayne Kamemoto, who raised almost $20,000. “For me, I’ve been doing this for a long time, and she’s been my inspiration to get on my game a little bit (to raise more money), so I’ve always kept her in mind.”</p>
                <p>Kamemoto said he has no personal connection to pediatric cancer, but participates and raises money purely to help medical advancement for children like Alexa – who he met at last year’s Dribble.</p>
                <p>A USC graduate and a manager at David Weise and Associates, Kamemoto has won first place over the past two years. This year, he handed Alexa his award when he was walking up the bleachers.</p>
                <p>“He’s amazing,” Karrie Kohler said. “He told us that Alexa is the reason he keeps coming.”</p>
                <p>Alexa is determined to keep attending each year too.</p>
                <p>In addition to the lemonade stand last year, Alexa sold hand-sewn pillowcases. This year, she sold homemade tie blankets.</p>
                <p>“She loves to raise the money for this herself,” Karrie Kohler said. “I don't know what she's going to come up with for next year, but she looks forward to (the Dribble) every year.”</p>
                <p>Email Hong at jhong@dailybruin.com or tweet @JoyHongDB.</p>`
            },
          ]}
        />
      </ScrollPercentage>
    </div>);
  }

  article1 = () => {
    return (<div id={`test-1`}>
        <ScrollPercentage onChange={(v) => this.state.updateEntryPercent(1, v)}>
          <Headline text="Now cancer-free, student gives back by advocating for awareness"/>
          <Article
            key={1}
            content={[
              {
                type: 'image',
                url: Image3,
                caption: `Samantha Bodger, a first-year communication student, was diagnosed with osteosarcoma at age 16. Bodger had to make the choice to amputate her leg after being diagnosed and has now been cancer-free for a year and a half.`,
                credit: 'Andrew Arfin/Daily Bruin',
              },
              {
                type: 'text',
                value:
                  `<p>Samantha Bodger was forced to choose.</p>
                  <p>“It was hard, but looking back I don't regret the choice I made,” said 18-year-old Bodger, a first-year communication student. “I had to decide to go ahead and have my leg amputated and now I am 1 1/2 years cancer-free.”</p>
                  <p>At age 16, Bodger was playing soccer when she thought she may have sprained her ankle and treated it as such. She was diagnosed with osteosarcoma a few months later.</p>
                  <p>Bodger was forced to leave school and move into a pediatric cancer wing to further her treatment.</p>
                  <p>After four months of chemotherapy, Bodger was given a choice – she could save her leg but have an almost useless ankle, or she could amputate her leg from the knee down.</p>
                  <p>Osteosarcoma is the most common type of bone cancer and occurs most frequently in people less than 25 years old. When treated correctly, patients with localized high-grade osteosarcoma have a survival rate of roughly 70 percent.</p>
                  <p>Bodger completed six months of chemotherapy after her amputation, totaling 10 months of treatment.</p>
                  <p>As a student at UCLA, Bodger joined the Bruins Fighting Pediatric Cancer club, through which she and other members work to raise awareness and funds for pediatric cancer survivors and their families.</p>
                  <p>“Events that support specifically pediatric cancer (patients) are more few and far between than events that support cancer (patients) in general,” Bodger said. “It gets a lot less funding from the government than other types of (cancer research), so it’s really cool to see such a big event like this.”</p>
                  `
              },
              {
                type: 'image',
                url: Image4,
                caption:`Bodger (left) was accompanied at the event by her friend, first-year biochemistry student Brianna Empson. Both are members of the Bruins Fighting Pediatric Cancer club at UCLA.`,
                credit: 'Andrew Arfin/Daily Bruin',
              },
              {
                type: 'text',
                value:
                  `<p>Another Bruins Fighting Pediatric Cancer club member, first-year biochemistry student Brianna Empson, joined Bodger at Dribble for the Cure. </p>
                  <p>“I came out to show my support to survivors of pediatric cancer and to raise awareness of it because they are so strong,” Empson said. “There's not a lot of events that specialize specifically around pediatric cancer, but this is something that affects these kids for their entire lives.”</p>
                  <p>Bodger said that the children at the event and others like them motivated her during her treatment.</p>
                  <p>“While I was on the pediatric cancer floor, I was a lot older than most of the other child fighters,” Bodger said. “Just seeing kids like them find joy in the small things really inspired me to get through. I feel like everyone can say that they are inspired by these little kids fighting to save their own lives.”</p>
                  `
              },
            ]}
          />
        </ScrollPercentage>
      </div>);
  }

  article2 = () => {
    return (<div id={`test-2`}>
        <Headline text=""/>
        <ScrollPercentage onChange={(v) => this.state.updateEntryPercent(2, v)}>
      <Article
      key={2}
      content={[
        {
          type: 'image',
          url: Image5,
          caption: `Leone Parks, a 4-year-old cancer patient, attended Dribble for the Cure with his brothers – 8-year-old Russell and 10-year-old Andrew – and his grandmother Laurel Parks.`,
          credit: 'Alice Naland/Daily Bruin',
        },
        {
          type: 'text',
          value:
            `<p>Leone Parks wore his light-up Spiderman shoes as a reminder of his favorite superhero.</p>
            <p>He also wore a cape – a reminder that he is a hero for other kids struggling with pediatric cancer. </p>
            <p>“It’s fun for them to see a different side of the hospital,” said Laurel Parks, Leone’s grandmother. “To see that the hospital is more than appointments.”</p>
            <p>The four-year-old honorary captain at Dribble for the Cure was first brought to UCLA Mattel Children's Hospital for medical treatment in February of 2016.  Doctors were unsure what was causing his bruising, initially thinking that it was a case of parental abuse.</p>
            <p>The causes of the bruises turned out to be Leukemia and he then was transferred – along with his three siblings – into the custody of his grandparents, Roger and Laurel Parks .</p>
            <p>“All the kids love their parents, but the parents don’t have all their things together right now,” Roger Parks said. “I really don’t know how it’s going to work out, but we’re just trying to do the best we can.”</p>
            <p>Leone was put on a four-year treatment plan, which is set to last until May of 2020.  Though he is stable now, he spent six weeks in the intensive care unit after catching two different types of the flu in the spring of 2018.</p>
            <p>Leone’s grandfather lived with him at the hospital, holding the child in his lap for the scary parts of treatment.  The four-year-old was 20 pounds lighter when he returned to his family.</p>
            `
        },
        {
          type: 'image',
          url: Image6,
          caption: `UCLA men's basketball redshirt freshman forward Jalen Hill was paired up with Leone Parks and his grandparents, Roger and Laurel Parks, during the event.`,
          credit: 'Alice Naland/Daily Bruin',
        },
        {
          type: 'text',
          value:
            `<p>“(Leone) was crying sometimes, so we waited for him the day he was going to come home," said Leone’s oldest brother Andrew. "I gave him a hug... (and) I read to him.”</p>
            <p>Since being released from the hospital, Leone has about one appointment a month – an improvement from his previous daily appointments.</p>
            <p>Roger Parks takes his grandson to every appointment, waking up at 5 a.m. every morning to commute from Thousand Oaks to the UCLA hospital.</p>
            <p>“Lately we don’t have tears when I wake him up at five in the morning to get ready to leave,” Laurel Parks said. "He didn’t want to go – let’s face it, he knows what’s waiting for him.”</p>
            <p>While Leone’s condition prevented him from attending school, his grandparents took on the task of helping Leone and his three older siblings catch up in their education.</p>
            <p>They also removed all video games from the house, only allowing them during the parents’ weekly visits.  She said it forces the boys to focus on learning by reading or writing their own stories in their free time instead.</p>
            <p>“Who got them to learn to read and write in the last eighteen months?” Laurel Parks said. “Us.”</p>
            <p>Roger and Laurel Parks take the kids to the movies on Sunday mornings, when they can have the theater to themselves in order to avoid Leone coming into contact with excessive germs.</p>
            <p>Although Leone couldn't dribble himself, UCLA athletes helped him around the course, pushing his stroller all the way to the finish line. The Dribble was the first public event Leone has been stable enough to attend since being diagnosed with cancer. </p>
            <p>His progress is a relief to his grandparents, who are ten years retired.</p>
            <p>“We’ve given up everything,” Laurel Parks said. “Our whole life is taking care of the kids.”</p>
            <p>Email Dzwonczyk at jdzwoncyzk@media.ucla.edu.</p>`
        },
      ]}
    />
    </ScrollPercentage>
    </div>);
  }

  article3 = () => {
    return (<div id={`test-3`}>
      <Headline text="Friends, family of young cancer patient team up to celebrate her memory"/>
      <ScrollPercentage onChange={(v) => this.state.updateEntryPercent(3, v)}>
    <Article
      key={3}
      content={[
        {
          type: 'image',
          url: Image7,
          caption: `The Guru Simran team has been participating in the Dribble for the Cure for the past 10 years, joining to represent Guru Simran Kaur Khalsa. The team recently combined with the Hoop Masters baskeball club of West Los Angeles.`,
          credit: 'Daniel Leibowitz/Daily Bruin staff',
        },
        {
          type: 'text',
          value:
            `<p>One person handing out maroon t-shirts emblazoned with “Gurusimran #8” stood out among the crowd gathered around the entrance to Drake Stadium. </p>
            <p>Dribble for the Cure participant Ashley Fleming is a part of the 35-participant Gurusimran group, with members hailing from around the Los Angeles area to support the Pediatric Cancer Research Foundation’s event. </p>
            <p>“We walk in honor of my very good friend's daughter. My daughter and Gurusimran (Khalsa) were friends since they were four years old," Fleming said. "My daughter went to school with her and played basketball with her. Gurusimran loved basketball and even though we lost her nine years ago, it is still fresh today.” </p>
            <p>Gurusimran died nine years ago at the age of 14 from an inoperable brain tumor. </p>
            <p>“Gurusimran was actually at the UCLA (Mattel Children's) Hospital,” said Dharham Dev Khalsa. “We've been raising money ever since and we want to help children that we can, in her memory." </p>
            <p>Gurusimran’s mother, Dharham Dev Khalsa, said the families still have close ties to UCLA and the campus area, as many of the current honorary captains for the Dribble were treated at the Mattel Children’s Hospital. </p>
            <p>Fleming said the team has grown in size since they joined the ranks of dribblers 10 years ago, one year after the fundraiser began.  </p>
            <p>They have brought at least 35 participants every year, raising $9,000 in the first two years and $3,000 up until this year. </p>
            `
        },
        {
          type: 'image',
          url: Image8,
          caption: `Participant Dharam Dev Kaur Khalsa holds up one of the Guru Simran team shirts for size against redshirt junior guard Prince Ali before participating in the dribble around campus.`,
          credit: 'Daniel Leibowitz/Daily Bruin staff',
        },
        {
          type: 'text',
          value:
            `
            <p>Aileen Wong,  a participant in the Dribble and the mother of Gurusimran’s childhood friend, said basketball brought the families together, which is why the team takes Gurusimran's number 8 jersey number in their name.  </p>
            <p>"Gurusimran was a year older than our girls, but they went to the same elementary school and were in a class together for a year and they became good friends,” Wong said. “She was very sweet and was a fierce competitor on the basketball team." </p>
            <p>The Gurusimran team has adopted more causes from around the youth basketball circuit into the group, recently adding the Hoop Masters basketball team, a West LA youth basketball program. </p>
            <p>Fleming's son Wonder Smith – a former UCLA men's basketball player – grew up playing in the program with Maxwell Kupchak, the son of former Los Angeles Lakers general manager Mitch Kupchak. </p>
            <p>Mitch Kupchak’s daughter Alina Kupchak died from cancer three years ago, and the Gurusimran team walks in honor of her as well. </p>
            <p>The Gurusimran team is still woven into UCLA's basketball programs, with freshman guard Jules Bernard being a Hoop Masters alumni and Fleming’s daughter playing high school basketball with former women's basketball guard Jordin Canada.  </p>
            <p>“Our lives are always swirling and connected to each other and I think that it is great to continue to show our love to the two families along with the excitement of the men's and women's basketball teams,” Fleming said. </p>
            <p>Despite not having a survivor with them today, Fleming said their goal is to continue Gurusimran’s legacy by helping future research. </p>
            <p>"(Gurusimran) was so much life and joy and it's really cool because I feel her spirit is with us and shines brightly,” Fleming said. “She has done so much for so many, even just being in heaven. We want to make sure children that can be helped can be." </p>
            <p>Email McCarthy at gmccarthy@dailybruin.com or tweet @GabeMcCarthyDB.</p>`
        },
      ]}
    />
    </ScrollPercentage>
    </div>);
  }

  article4 = () => {
    return(<div id={`test-4`}>
        <ScrollPercentage onChange={(v) => this.state.updateEntryPercent(4, v)}>
          <Headline text="Friends, family form team to celebrate memory of young cancer patient"/>
          <Article
          key={4}
          content={[
            {
              type: 'image',
              url: Image9,
              caption: `UCLA men’s basketball redshirt freshman forward Jalen Hill spent time with 4-year-old cancer patient Leone Parks at this year's Dribble for the Cure. Hill was one of many athletes present at the event.`,
              credit: 'Axel Lopez/Assistant Photo editor',
            },
            {
              type: 'text',
              value:
                `<p>Jalen Hill never lost sight of 4-year-old Leone Parks.</p>
                <p>From the start of Dribble for the Cure, the UCLA men’s basketball redshirt freshman forward stuck beside the young cancer patient, pushing his stroller and listening to his every word.</p>
                <p>“He just wanted to talk the whole time,” Hill said. “He talked about what he does every day and he enjoyed what today was, so I just went along with it.” </p>
                <p>Hill participated in the event with the rest of the men's and women's basketball teams, walking alongside families of cancer patients that the players were assigned to.</p>
                <p>“It just opened my eyes to a lot,” Hill said. “People don't even know what he's going through, but he's just enjoying life. It just made me smile.”</p>
                <p>Men’s basketball coach Steve Alford – who has led the Bruins in the event for the past six years – said the presence of the athletes is something the children will remember for a long time.</p>
                <p>“You can have guys that just don't engage and aren’t interactive with (the children)," Alford said. "(But) you saw (the men's and women's teams) shooting around with the kids, walking with them and dribbling with them across campus and actually diving into their lives, even if it’s for a couple hours.”</p>
                <p>Men’s basketball sophomore guard Joseph Wallace and freshman guard David Singleton played games of one-on-one against some of the participants after they crossed the finish line in Pauley Pavilion. </p>
                <p>“They beat Joe, but they didn't beat me,” Singleton said.</p>
                <p>Sophomore guard Chris Smith walked the mile-long course alongside Kenny Thomas – a 14-year-old freshman in high school who battled cancer six years ago.</p>
                <p>Kenny served as one of the honorary captains for the Dribble and shared his story at the closing ceremony of the event. He noted his recent achievements of making his high school basketball team and earning a 4.0 GPA, getting closer to his goal of becoming a sports journalist.</p>
                <p>“When we saw him six years ago versus what we see now, it’s a miracle,” Alford said. “That's kind of cool to be a part of.”</p>
                <p>Other student-athletes, such as members of the men’s and women’s tennis teams, also took part in the Dribble as volunteers during registration at Drake Stadium.</p>
                <p>Women’s tennis senior Ayan Broomfield and redshirt junior Jada Hart met participants by handing out cinnamon rolls and bottles of water.</p>
                <p>While some Bruins began talking to any of the children around them, other athletes sought out familiar faces.</p>
                <p>Women’s basketball redshirt senior forward Lajahna Drummer spent her time with 12-year-old Alanna Neale – a frequent participant at the Bruins’ basketball camps.</p>
                `
            },
            {
              type: 'image',
              url: Image10,
              caption: `Women’s basketball redshirt senior forward Lajahna Drummer met up with 12-year-old Alanna Neale at Dribble for the Cure. Drummer said Neale has frequently attended the Bruins' basketball camps.`,
              credit: 'Axel Lopez/Assistant Photo editor',
            },
            {
              type: 'text',
              value:
                `
                <p>“She's one of my favorite campers because she just has this big personality and spirit,” Drummer said. “She’s very excited about basketball, so that's why I just clung onto her and tried to keep encouraging her and be that big sister.”</p>
                <p>Women’s basketball coach Cori Close said other players have developed deeper connections with some of the children, such as junior forward Ally Rosenblum’s two-year friendship with 7-year-old Grayson Marzotti-Miller – another honorary captain.</p>
                <p>Close said watching the athletes interact with children on that level is a unique feeling. </p>
                <p>“It’s literally life-changing,” Close said. “They know they did something that’s bigger than themselves, so it is truly our honor and it changes our hearts the most.”</p>
                <p>As many of the athletes prepare to take the field or the court – some for the first time this season – each young cancer patient is an inspiration. </p>
                <p>For Hill, Leone’s spirit and his bright pink cape will especially stick in his mind.</p>
                <p>“Sometimes you're going through and you think you're going through the worst thing,” Hill said. “But there's always somebody else that's going through something worse. Seeing that he is just attacking it with a smile (and) having fun, it makes my day better.”</p>`
            },
          ]}
        />
        </ScrollPercentage>
      </div>);
  }

  createArticles = (updateEntryPercent: (index: number, percent: number) => void, curriedMediaOnClick: (number) => void) => {
    let out = [];
    for (let i of [0, 1, 2]) {
      out.push(
        <ScrollPercentage onChange={(v) => updateEntryPercent(i, v)}>
        <h1>Title for article {i}</h1>
        <Article
          key={i}
          id={`test-${i}`}
          content={[
            {
              type: 'text',
              value:
                '<strong>Lorem</strong> <a href="https://dailybruin.com">ipsum</a> dolor sit amet, consectetur adipiscing elit. Cras porttitor metus in pellentesque bibendum. Fusce rutrum sollicitudin finibus. Proin pellentesque leo enim, sed ultrices diam laoreet ut. Vivamus ut consequat nulla. Aenean sodales enim ut sapien rhoncus, in rhoncus metus mattis. Phasellus sed turpis tristique, tristique augue quis, lobortis est. Proin consectetur volutpat lacus, vitae luctus orci eleifend ac. Aliquam porttitor aliquet purus. Fusce condimentum eu sapien ut malesuada. Sed at nibh purus. Quisque et cursus nisl. Donec sed tincidunt ex.',
            },
            {
              type: 'image',
              url:
                'https://dailybruin.com/images/2018/10/web.sp_.mwp_.nbk_.ADX_-640x461.jpg',
              caption:
                'Freshman attacker Ashworth Molthen has registered 21 goals on the season, finding the back of the net in 13 of the 16 games so far this year for UCLA men’s water polo. UCLA is one of two teams remaining in the MPSF conference that remains undefeated.',
              credit: 'Amy Dixon/Photo Editor',
              mediaOnClick: curriedMediaOnClick.bind(this, i),
            },
            {
              type: 'text',
              value:
                '<strong>Lorem</strong> <a href="https://dailybruin.com">ipsum</a> dolor sit amet, consectetur adipiscing elit. Cras porttitor metus in pellentesque bibendum. Fusce rutrum sollicitudin finibus. Proin pellentesque leo enim, sed ultrices diam laoreet ut. Vivamus ut consequat nulla. Aenean sodales enim ut sapien rhoncus, in rhoncus metus mattis. Phasellus sed turpis tristique, tristique augue quis, lobortis est. Proin consectetur volutpat lacus, vitae luctus orci eleifend ac. Aliquam porttitor aliquet purus. Fusce condimentum eu sapien ut malesuada. Sed at nibh purus. Quisque et cursus nisl. Donec sed tincidunt ex.',
            },
          ]}
        />
          <Carousel slideIndex={this.state.slideIndex}>
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
            <div>
              <video controls
                    muted
                    src="../assets/bbathletes.mp4"
                    width="100%"
                    height="100%"
                    className="vi">
                  Sorry, your browser doesn't support embedded videos.
              </video>
              <h1>HELLO BYE</h1>
            </div>
            
          </Carousel>
        </ScrollPercentage>
      )
    }

    return out;
  };
  /*
                  <ProgressContext.Consumer>
                {context => this.createArticles(context.updateEntryPercent, index => console.log(`${index} is working`))}
              </ProgressContext.Consumer>
  */
  render() {
    return (
      <div>
        <Head
          siteName="Dribble for the Cure"
          description="testing 123 123"
          url=""
          image="https://lh3.googleusercontent.com/Eg4qDeTD4Efy07T52jJj5DUG4oRyaetRH0UGfkHoT0jBeFlCoVdAVtLNuMq2vR1XkUbv=w300"
        />
        <Board 
          backgroundSrc="https://images.unsplash.com/photo-1539442836969-3938f1cd2179?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=79e3365148694703fd13d85918c18903&auto=format&fit=crop&w=668&q=80"
          iconSrc="data:image/png;base64,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"
          title="dribble for the cure"
          subtitle="mini-boom"
          />
        <ProgressContext.Provider value={this.state}>
          <div style={{ position: this.state.showSlides ? "relative" : "static" }}>
            <div style={{
              position: 'sticky',
              top: 0,
              float: 'left',
              width: '30%',
            }}>
              <Menu />
            </div>
            <div style={{
              float: 'left',
              width: '70%',
            }}>
            </div>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
              <div style={{maxWidth: 700}}>
                {this.article0()}
                {this.article1()}
                {this.article2()}
                {this.article3()}
                {this.article4()}
              </div>
            </div>
            <div style={{
              display: "table",
              clear: 'both',
            }}></div>
          </div>
        </ProgressContext.Provider>
        {this.state.showSlides &&
          <div style={{
            position: "absolute",
            top: "0",
            width: "100%",
            height: "100%",
            zIndex: 10,
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundColor: "black",
              opacity: 0.9,
            }}></div>
          </div>
        }
        <Footer
          githubName={'https://github.com/dailybruin/interactive.2018.dribble-for-the-cure'}
          developers={['Richard Yang', 'Kevin Qian']}
          copyrightYear={2018}
        />
      </div>
    );
  }
}

export default IndexPage
