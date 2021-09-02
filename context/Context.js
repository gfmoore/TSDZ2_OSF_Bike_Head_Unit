/**
 * Name:          TSDZ2 OSF Bike Head Unit
 * Author:        Gordon Moore
 * File:          Context.js
 * Date:          21 August 2021
 * Description:   The context mechanism to provide data to any component
 * Licence        The MIT License https://opensource.org/licenses/MIT 
 * 
 * Version history
 * 0.0.1    21 August 2021     Initial version
 */

import React from 'react'

const ParameterContext = React.createContext()

export const ParameterProvider = ParameterContext.Provider
export const ParameterConsumer = ParameterContext.Consumer

export default ParameterContext
