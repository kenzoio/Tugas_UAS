//@ts-check

import Link from "next/link"

const NavBar = () => {
    return (
        <div>
            <header className="blog-header py-3 bg-dark">
                <div className="row flex-nowrap justify-content-between align-items-center">
                    <div className="col-15 text-center pt-1">
                        <h2 className="blog-header-logo text-light">HS Computer</h2>
                    </div>
                </div>
            </header>

            <div className="nav-scroller py-1 mb-2 bg-light">
                <nav className="nav d-flex justify-content-center">
                    <button className="btn btn-light">

                        <Link href="/"><a className="p-2 link-secondary">Home</a></Link>
                        <Link href="/merk"><a className="p-2 link-secondary">Spesifikasi Barang</a></Link>
                        <Link href="/user/dtmerk"><a className="p-2 link-secondary">Data Barang</a></Link>

                    </button>

                </nav>

            </div>
        </div>
    )
}


export default NavBar;
