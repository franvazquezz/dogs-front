import style from './pagination.module.css'

const Pagination = ({totalPosts, postsPage, setCurrentPage}) => {
    let pages = []
    for (let i = 1; i <= Math.ceil(totalPosts / postsPage); i++) {
        pages.push(i)
    }

    return (
        <div className={style.pagination}>
            {
                pages.map((page, index) => {
                    return (
                        <button className={style.boton} key={index} onClick={()=>setCurrentPage(page)}>{page}</button>
                    )
                })
            }
        </div>
    )
}

export default Pagination