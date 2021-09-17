export default function ({ store, redirect }) {

  ///store จะใช้ตอนปิดเเล้วเปิดใหม่ให้login เป็นการเก็บข้อมูลในram
  let user = localStorage.getItem("dataall")
  // If the user is not authenticated
  if (!user) {
    return redirect('/login')
  }
}