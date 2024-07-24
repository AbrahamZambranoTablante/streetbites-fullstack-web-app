
export default function Home () {

    return (
        <>
            <div className="home-container">
                <div className="home__title">
                    <h1>Street Bites</h1>
                </div>
                <div className="home__logo">
                    <img src="https://yt3.googleusercontent.com/bcuWJYLswS-Xks91LsWiboQLQt1vPATQ7HybqU-oajLvGQ6fC0EbICgF5XlOst0VXh_lNYus_HE=s900-c-k-c0x00ffffff-no-rj
" alt="logo" />
                </div>
                <div className="home__locationForm">
                    <form action="">
                        <label htmlFor="borough">
                            Select A Borough
                        </label>
                        <select name="" id="borough">
                            <option></option>
                            <option value="manhattan">Manhattan</option>
                            <option value="brooklyn">Brooklyn</option>
                            <option value="queens">Queens</option>
                            <option value="bronx">Bronx</option>
                            <option value="statenisland">Staten Island</option>
                        </select>
                        <label htmlFor="neighborhood">
                            Select A Neighborhood
                        </label>
                        <select name="" id="neighborhood">
                        </select>
                    </form>
                </div>
            </div>
        </>
    )
}