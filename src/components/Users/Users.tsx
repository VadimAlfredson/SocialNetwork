import React, {Dispatch} from "react";
import {UserType} from "../../Redux/users_reducers";
import {DispatchType} from "../../Redux/Types";
import s from "../Users/users.module.css"
import * as axios from "axios";

class Users extends React.Component {

   componentDidMount(): void {
       axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
           .then(responce => {
               this.props.setUsers(responce.data.items)
               this.props.setTotalUsersCount(responce.data.totalCount)
           })
   }

   onPageChange = (pageNumber) => {
       this.props.setCurrentPage(pageNumber),
           axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
               .then(responce => {
                   this.props.setUsers(responce.data.items)
                   this.props.setTotalUsersCount(responce.data.totalCount)
               })
   }

    render(): React.ReactNode {
       let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
       let pages = [];
       for (let i = 1; i <= pageCount; i++) {
           pages.push(i);
        }
        return (<div>
            <div>
                { pages.map( p => {
                        return <span className={this.props.currentPage === p && s.activePage}
                        onClick={ () => {this.onPageChange(p)} }
                        >{p}</span>
                    }
                )}
            </div>
            <div>
                {
                    this.props.users.map((u: UserType) => <div key={u.id}>
        <span>
            <div>
                <img src={u.photos.small !== null ? u.photos.small :
                    'https://st3.depositphotos.com/1027110/18677/v/450/depositphotos_186777156-stock-illustration-dog-collection-swedish-vallhund-geometric.jpg'
                } className={s.avatar}/>{
                <button
                    onClick={() => (this.props.followed(u.id))}>{u.followed === true ? 'Unfollew' : 'Follow'}</button>
            }</div>
<span>
    <div>{u.name}</div>
    <div>{u.status}</div>
</span>
        </span>
                    </div>)}
            </div>
            </div>
        );
    }

}

export default Users