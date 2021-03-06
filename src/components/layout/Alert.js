import React, { useContext } from 'react'
import AlertContext from '../../context/alert/alertContext'

function Alert() {
    const alertContext = useContext(AlertContext);

    return (
      alertContext.alert !== null && (
          <div className={`alert alert-${alertContext.alert.type}`}>
              <i className="fas fa-info-circle m" />
              {alertContext.alert.message}
          </div>
      )
    )
}

export default Alert;
