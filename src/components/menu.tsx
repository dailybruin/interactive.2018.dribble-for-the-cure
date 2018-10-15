import React from 'react'

import { ProgressContext } from '../contexts/contexts'

interface MenuItemProps {
  onIconClick: () => void
  percent: number
  title: string
}

export class MenuItem extends React.Component<MenuItemProps> {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    percent: 0,
    title: 'TEXT',
    onIconClick: () => {},
  }

  render() {
    const { percent, title, onIconClick } = this.props
    const shouldLit = percent > 0
    return (
      <div className="menu-item">
        <div
          className={['menu-title', shouldLit ? 'menu-title-lit' : ''].join(
            ' '
          )}
        >
          {title}
        </div>
        <div className="menu-bar">
          <svg
            className={['icon', shouldLit ? 'icon-lit' : ''].join(' ')}
            width="116"
            height="116"
            viewBox="0 0 116 116"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => onIconClick()}
          >
            <path d="M58 0C26.0192 0 0 26.0192 0 58C0 61.7096 0.365146 65.3372 1.03284 68.856L0.815243 69.1168C0.91957 69.2048 1.02092 69.2793 1.12524 69.3657C6.42358 95.923 29.9076 116 58 116C89.9808 116 116 89.9808 116 58C116 26.0192 89.9808 0 58 0ZM107.399 37.6308C107.321 56.447 90.5397 60.4591 83.4857 61.3102C89.3652 41.0349 87.69 21.5719 86.4053 12.7652C95.7367 18.6478 103.133 27.3293 107.399 37.6308ZM81.3142 9.92301C82.2874 14.9531 85.9627 37.61 78.8178 61.0702C65.2224 57.4664 63.2939 47.5658 60.72 34.0882C58.9777 24.9581 57.0074 14.728 50.7433 5.06434C53.119 4.74093 55.5379 4.5591 58 4.5591C66.3536 4.5591 74.2646 6.48916 81.3142 9.92301ZM45.8503 5.96901C52.487 15.345 54.4842 25.7346 56.2428 34.9437C58.7974 48.3259 61.2297 60.9942 77.3691 65.4162C76.1783 68.6965 74.7624 71.9709 73.0813 75.1961C39.6071 58.9807 19.068 32.9316 14.6028 26.8732C22.0369 16.5344 33.0673 8.95277 45.8503 5.96901ZM11.9499 30.9271C18.2021 39.1033 38.686 63.501 70.8516 79.1725C69.5937 81.2695 68.2092 83.3322 66.6949 85.3531C57.8897 80.9803 49.6195 80.3037 41.6057 79.6509C30.5172 78.7462 19.0591 77.779 5.30877 66.8768C4.8229 63.9884 4.55761 61.0255 4.55761 58C4.5591 48.1247 7.26118 38.8738 11.9499 30.9271ZM6.92584 73.737C19.7611 82.426 30.6558 83.3321 41.2361 84.1966C48.8565 84.8181 56.0983 85.4187 63.7708 89.0135C57.5886 96.2479 49.5182 102.777 39.0437 107.955C23.7449 102.129 11.786 89.48 6.92584 73.737ZM45.1871 109.879C54.6988 104.567 62.1478 98.1451 67.9647 91.1388C70.4075 92.4891 75.1946 95.6413 76.4421 100.18C77.1828 102.87 76.5106 105.777 74.4867 108.828C69.2927 110.517 63.7544 111.442 58.0015 111.442C53.584 111.441 49.2931 110.892 45.1871 109.879ZM80.6807 106.375C81.4364 103.864 81.5034 101.381 80.8313 98.9484C79.2395 93.1911 73.9785 89.3593 70.8024 87.5067C72.3346 85.4157 73.734 83.2845 75.0098 81.1219C82.9894 84.7018 91.6381 87.7035 100.923 89.796C95.6726 96.8649 88.7214 102.589 80.6807 106.375ZM103.667 85.7317C94.1688 83.7316 85.3457 80.7329 77.2275 77.1232C79.1203 73.4628 80.6882 69.7428 81.9833 66.0257C85.9865 65.7351 97.2002 64.2388 104.785 56.5066C107.332 53.9104 109.192 50.864 110.386 47.4212C111.076 50.8417 111.442 54.3784 111.442 58C111.441 68.1481 108.597 77.6433 103.667 85.7317Z" />
          </svg>
          <div className="bar">
            <div className="background" />
            <div
              className="front"
              style={{
                height: `${this.props.percent * 100}px`,
              }}
            />
          </div>
        </div>
      </div>
    )
  }
}

export class Menu extends React.Component {
  constructor(props) {
    super(props)
  }

  createBars = context => {
    return context.entries.map((entry, index) => (
      <MenuItem
        key={index}
        percent={entry.percent}
        title={entry.title}
        onIconClick={() =>
          document
            .getElementById(entry.id)
            .scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      />
    ))
  }

  render() {
    return (
      <div className="menu">
        <ProgressContext.Consumer>
          {context => this.createBars(context)}
        </ProgressContext.Consumer>
      </div>
    )
  }
}
