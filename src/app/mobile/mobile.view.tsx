import { useRef, useState } from 'react'
import { Tabs, Swiper } from 'antd-mobile'
import { SwiperRef } from 'antd-mobile/es/components/swiper'
import { DemoBlock } from '../../components/demos'

const tabItems = [
    { key: 'vegetables', title: '蔬菜' },
    { key: 'fruits', title: '水果' },
    { key: 'teste', title: 'teste' },
    { key: 'animals', title: '动物' },
]

export default () => {
    const swiperRef = useRef<SwiperRef>(null)
    const [activeIndex, setActiveIndex] = useState(1)

    return (
        <>
            <DemoBlock title='配合 Swiper 实现手势滑动' padding='0'>
                <Tabs
                    activeKey={tabItems[activeIndex].key}
                    onChange={key => {
                        const index = tabItems.findIndex(item => item.key === key)
                        setActiveIndex(index)
                        swiperRef.current?.swipeTo(index)
                    }}
                >
                    {tabItems.map(item => (
                        <Tabs.Tab title={item.title} key={item.key} />
                    ))}
                </Tabs>
                <Swiper
                    direction='horizontal'
                    loop
                    indicator={() => null}
                    ref={swiperRef}
                    defaultIndex={activeIndex}
                    onIndexChange={index => {
                        setActiveIndex(index)
                    }}
                >
                    <Swiper.Item>
                        <div >sas</div>
                    </Swiper.Item>
                    <Swiper.Item>
                        <div >sas</div>
                    </Swiper.Item>
                    <Swiper.Item>
                        <div >sas</div>
                    </Swiper.Item>
                    <Swiper.Item>
                        <div >teste</div>
                    </Swiper.Item>
                </Swiper>
            </DemoBlock>
        </>
    )
}