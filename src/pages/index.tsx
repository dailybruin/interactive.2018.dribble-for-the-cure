import * as React from 'react';
import { Head, Footer } from '@dailybruin/lux';
import { Article } from '@dailybruin/lux';
/*
 * Coverphoto
 */
const IndexPage = () => (
  <>
    <Head
      siteName="Dribble for the Cure"
      description="testing 123 123"
      url=""
      image="https://lh3.googleusercontent.com/Eg4qDeTD4Efy07T52jJj5DUG4oRyaetRH0UGfkHoT0jBeFlCoVdAVtLNuMq2vR1XkUbv=w300"
    />
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <div style={{maxWidth: 700}}>
      <Article
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
          },
          {
            type: 'text',
            value:
              '<strong>Lorem</strong> <a href="https://dailybruin.com">ipsum</a> dolor sit amet, consectetur adipiscing elit. Cras porttitor metus in pellentesque bibendum. Fusce rutrum sollicitudin finibus. Proin pellentesque leo enim, sed ultrices diam laoreet ut. Vivamus ut consequat nulla. Aenean sodales enim ut sapien rhoncus, in rhoncus metus mattis. Phasellus sed turpis tristique, tristique augue quis, lobortis est. Proin consectetur volutpat lacus, vitae luctus orci eleifend ac. Aliquam porttitor aliquet purus. Fusce condimentum eu sapien ut malesuada. Sed at nibh purus. Quisque et cursus nisl. Donec sed tincidunt ex.',
          },
        ]}
      />
      </div>
    </div>
    <Footer
      githubName={'interactive.2018.dribble-for-the-cure'}
      developers={['Richard Yang', 'Kevin Qian']}
      copyrightYear={2018}
    />
  </>
)

export default IndexPage
