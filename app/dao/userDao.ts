const mysql = require('../mysql');
import User from '../entity/UserEntity';

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
        let res = await mysql(this._tab).select().where({user_name:this.user.userName,user_pwd:this.user.userPwd});
        return new User(JSON.parse(JSON.stringify(res))[0])
    }
    // 检查session
    public async check (session_id:String): Promise<User>{
        let res = await mysql('sessions').select().where({session_id:session_id});
        console.log(res.length);
        let userInfo = res.length?JSON.parse(JSON.parse(JSON.stringify(res))[0].data).userInfo:"{}";
        console.log(JSON.parse(userInfo))
        return new User(JSON.parse(userInfo))
    }
    // 注销
    public async logout (session_id:String): Promise<boolean>{
        let res = await mysql('sessions').del().where({session_id:session_id});
        console.log(res);
        
        return res>=1
    }
}