const mysql = require('../mysql');
import User from '../model/UserModel';
export default class userDao {
    private _user: User;
    public get user(): User {
        return this._user;
    }
    public set user(value: User) {
        this._user = value;
    }
    private _tab = 'user_tab';
    // 构造方法
    constructor(user:User){
        this._user = user;
    }
    // 注册方法
    public async register (): Promise<User>{
        
        let res = await mysql(this._tab).insert(this.user).whereNot({user_name:this.user.userName});
        console.log(res)

        return new User()
    }
    // 登录方法
    public async login (): Promise<User>{
        console.log('26',this.user.userName,this.user.userPwd)
        let res = await mysql(this._tab).select().where({user_name:this.user.userName,user_pwd:this.user.userPwd});
        console.log('28',JSON.parse(JSON.stringify(res)))

        return new User(JSON.parse(JSON.stringify(res))[0])
	}
}