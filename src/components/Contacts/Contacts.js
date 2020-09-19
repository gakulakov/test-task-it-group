import React from "react";
import classes from './Contacts.module.css'

const Contacts = () => {
  return (
    <div className={classes.contacts}>
      <div className={classes.inner}>
        <div className={classes.more}>
        <div className={classes.mainInfo}>
          <h1>Связь с нами</h1>
          <p>У вас остались вопросы? Напишите нам - мы ответим в ближайшее время!</p>
          <div className={classes.companyContacts}>
            <ul>
              <li><span>+7 (111) 222-33-44</span></li>
              <li><span>order@bu-one.ru</span></li>
            </ul>
          </div>
        </div>
        <div className={classes.inputContainer}>
          <div className={classes.names}>
            <div>
              <p>Имя</p>
              <input type="text" placeholder={'Иван'}/>
            </div>
            <div>
              <p>Фамилия</p>
              <input type="text" placeholder={'Иванов'}/>
            </div>
          </div>
          <div className={classes.message}>
            <p>Сообщение</p>
            <input type="text" placeholder={'Ваше сообщение'}/>
          </div>
        </div>
        </div>
            <button>Отправить сообщение</button>
      </div>
    </div>
  )

}
export default Contacts;
