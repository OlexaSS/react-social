import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reduser';


// обертка, возвращает презентационную компоненту
class ProfileContainer extends React.Component {
// метод жизненного цикла для взаимодействия с реактом
  componentDidMount(){
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {           // в респонс приходит объект с сервера
                this.props.setUserProfile(response.data);  //сетаем этот объект в редусер
            });
  }

//---------//
  render(){
    return (
      <div>
        {/* прокидываем все пропсы в профайл */}
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}
//прокидываем пропсы в профайл
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile      //взято из ответа сервера, в консоли посмотреть
});


// передаем пропсы и экшнкреаторы в профайлредусер
export default connect (mapStateToProps, {setUserProfile} ) (ProfileContainer);