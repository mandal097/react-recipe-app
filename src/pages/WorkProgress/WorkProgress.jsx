import './style.scss'
const WorkProgress= () => {
    const img = 'articles_mainpage.avif'
    return (
        <div className="Articles_More_"
        style={{
            background:`linear-gradient(to top, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(/images/${img})`
        }}
        >
            <div className="text_wrapper">
                <h2>Working on it !!!!!</h2>
                {/* <h2>Mindful Eating: Benefits and How to Practice</h2> */}
            </div>
        </div>
    )
}

export default WorkProgress