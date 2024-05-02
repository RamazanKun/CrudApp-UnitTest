import { render,screen, within } from "@testing-library/react"
import UserList from "./UserList"

let users=[{name: 'Mehmet', email: 'mehmet123@gmail.com'},
{name: 'Ramazan', email: 'Ramazan123@gmail.com'}]

test("mehmet ismi var mı?",()=>{
    render(<UserList users={users} />);
    let isim1= screen.getByText("Mehmet");
    expect(isim1).toBeInTheDocument("Mehmet");
    
})


test("kaç satır var anlık?",()=>{
    render(<UserList users={users} />);
    let sıralar=within(screen.getByTestId("userid")).getAllByRole("row");
    expect(sıralar).toHaveLength(2)
  })

  test("tüm users dizisi dön, name ve email bas",()=>{
    render(<UserList users={users} />);
    
    users.map((item)=>{
       let is= screen.getByText(item.name)
       let ma= screen.getByText(item.email)
       expect(is).toBeInTheDocument()
       expect(ma).toBeInTheDocument()
    })
  })

