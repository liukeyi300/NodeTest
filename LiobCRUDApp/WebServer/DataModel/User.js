/**
 * Created by Liukeyi on 2016/4/27.
 */
function User(userName, pwd, profession, id) {
    this.userName = userName || '';
    this.pwd = pwd || '';
    this.profession = profession || '';
    this.id = id || '';
}

module.exports = User;