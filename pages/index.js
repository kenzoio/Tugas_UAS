//@ts-check

import Jumbotron from "../components/props/Jumbotron"
import UserLayout from "../components/user/UserLayout"

export default function Home(){
  let jumbo = {
    judul: "HS Computer",
    isi: "toko ini menyediakan peralatan komputer"
  }
  return (
    <div>
      <UserLayout>
        <Jumbotron judul={jumbo.judul} isi={jumbo.isi} />
      </UserLayout>
    </div>
  )
}