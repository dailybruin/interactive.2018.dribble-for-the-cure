import * as React from 'react';
import { Head, Footer } from '@dailybruin/lux';
// import { Article } from '@dailybruin/lux';
// /*
//  * Coverphoto
//  */
// const IndexPage = () => (
//   <>
//     <Head
//       siteName="Dribble for the Cure"
//       description="testing 123 123"
//       url=""
//       image="https://lh3.googleusercontent.com/Eg4qDeTD4Efy07T52jJj5DUG4oRyaetRH0UGfkHoT0jBeFlCoVdAVtLNuMq2vR1XkUbv=w300"
//     />
//     <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
//       <div style={{maxWidth: 700}}>
//       <Article
//         content={[
//           {
//             type: 'text',
//             value:
//               '<strong>Lorem</strong> <a href="https://dailybruin.com">ipsum</a> dolor sit amet, consectetur adipiscing elit. Cras porttitor metus in pellentesque bibendum. Fusce rutrum sollicitudin finibus. Proin pellentesque leo enim, sed ultrices diam laoreet ut. Vivamus ut consequat nulla. Aenean sodales enim ut sapien rhoncus, in rhoncus metus mattis. Phasellus sed turpis tristique, tristique augue quis, lobortis est. Proin consectetur volutpat lacus, vitae luctus orci eleifend ac. Aliquam porttitor aliquet purus. Fusce condimentum eu sapien ut malesuada. Sed at nibh purus. Quisque et cursus nisl. Donec sed tincidunt ex.',
//           },
//           {
//             type: 'image',
//             url:
//               'https://dailybruin.com/images/2018/10/web.sp_.mwp_.nbk_.ADX_-640x461.jpg',
//             caption:
//               'Freshman attacker Ashworth Molthen has registered 21 goals on the season, finding the back of the net in 13 of the 16 games so far this year for UCLA men’s water polo. UCLA is one of two teams remaining in the MPSF conference that remains undefeated.',
//             credit: 'Amy Dixon/Photo Editor',
//           },
//           {
//             type: 'text',
//             value:
//               '<strong>Lorem</strong> <a href="https://dailybruin.com">ipsum</a> dolor sit amet, consectetur adipiscing elit. Cras porttitor metus in pellentesque bibendum. Fusce rutrum sollicitudin finibus. Proin pellentesque leo enim, sed ultrices diam laoreet ut. Vivamus ut consequat nulla. Aenean sodales enim ut sapien rhoncus, in rhoncus metus mattis. Phasellus sed turpis tristique, tristique augue quis, lobortis est. Proin consectetur volutpat lacus, vitae luctus orci eleifend ac. Aliquam porttitor aliquet purus. Fusce condimentum eu sapien ut malesuada. Sed at nibh purus. Quisque et cursus nisl. Donec sed tincidunt ex.',
//           },
//         ]}
//       />
//       </div>
//     </div>
//     <Footer
//       githubName={'interactive.2018.dribble-for-the-cure'}
//       developers={['Richard Yang', 'Kevin Qian']}
//       copyrightYear={2018}
//     />
//   </>
// )

import { Menu } from '../components/menu';
import Article from '../components/article';
import Board from '../components/board';
import { ProgressContext } from '../contexts/contexts';
import Carousel from 'nuka-carousel';

import ScrollPercentage from 'react-scroll-percentage';


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
      entries: [],
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
    this.prepareEntries();
    this.prepareSlides();
    this.setState({
      slideIndex: 0,
    });
  }

  prepareEntries() {
    // TODO: implement this
    this.setState({
      entries: [
        {percent: 0, id: "test-0"},
        {percent: 0, id: "test-1"},
        {percent: 0, id: "test-2"}
      ],
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
                    src="https://developer.mozilla.org/media/examples/stream_of_water.webm"
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
          <div style={{ position: this.state.showSlides ? "fixed" : "static" }}>
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
              <ProgressContext.Consumer>
                {context => this.createArticles(context.updateEntryPercent, index => console.log(`${index} is working`))}
              </ProgressContext.Consumer>
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
