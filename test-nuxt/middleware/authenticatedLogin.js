export default function ({ store, redirect }) {

    ///store จะใช้ตอนปิดเเล้วเปิดใหม่ให้login เป็นการเก็บข้อมูลในram

    let user = localStorage.getItem("dataall")
    // console.log(store)
    // If the user is not authenticated
    if (user) {
        return redirect('/')

    }


}