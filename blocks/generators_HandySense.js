Blockly.JavaScript['HandySense_Setup'] = function(block) {
    //var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var code = `
  #EXTINC #include <HandySense.h>#END

  setup_HandySense();
  `;
    return code;
  };
  Blockly.JavaScript['HandySense_Update'] = function(block) {
    var value_Soil_RawData = Blockly.JavaScript.valueToCode(block, 'Soil_RawData', Blockly.JavaScript.ORDER_ATOMIC);
    var value_Light_RawData = Blockly.JavaScript.valueToCode(block, 'Light_RawData', Blockly.JavaScript.ORDER_ATOMIC);
    var value_Temp_RawData = Blockly.JavaScript.valueToCode(block, 'Temp_RawData', Blockly.JavaScript.ORDER_ATOMIC);
    var value_Hum_RawData = Blockly.JavaScript.valueToCode(block, 'Hum_RawData', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `
  #EXTINC #include <HandySense.h>#END
  
  loop_HandySense(${value_Soil_RawData},${value_Light_RawData},${value_Temp_RawData},${value_Hum_RawData});
  `;
    return code;
  };
  Blockly.JavaScript['HandySense_CalSoilSensor'] = function(block) {
    var value_analog_RawData = Blockly.JavaScript.valueToCode(block, 'RawAnalog', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `analog_to_percent(${value_analog_RawData})`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  Blockly.JavaScript['HandySense_setTime_Interval_Sensor'] = function(block) {
    //var value_analog_RawData = Blockly.JavaScript.valueToCode(block, 'RawAnalog', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_Time_Interval_Sensor = block.getFieldValue('Time_Interval_Sensor');
    var code = `eventInterval = ${dropdown_Time_Interval_Sensor};\n
                eventInterval_brightness = ${dropdown_Time_Interval_Sensor};\n`;
    return code;
  };
  Blockly.JavaScript['HandySense_setTime_Interval_publishData'] = function(block) {
    //var value_analog_RawData = Blockly.JavaScript.valueToCode(block, 'RawAnalog', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_Time_Interval_publishData = block.getFieldValue('Time_Interval_publishData');
    var code = `eventInterval_publishData = ${dropdown_Time_Interval_publishData};\n`;
    return code;
  };
  Blockly.JavaScript['HandySense_setPin_Relay'] = function(block) {
    var value_RelayPin1 = Blockly.JavaScript.valueToCode(block, 'RelayPin1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_RelayPin2 = Blockly.JavaScript.valueToCode(block, 'RelayPin2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_RelayPin3 = Blockly.JavaScript.valueToCode(block, 'RelayPin3', Blockly.JavaScript.ORDER_ATOMIC);
    var value_RelayPin4 = Blockly.JavaScript.valueToCode(block, 'RelayPin4', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `setPin_Relay(${value_RelayPin1},${value_RelayPin2},${value_RelayPin3},${value_RelayPin4});`;
    return code;
  };
  Blockly.JavaScript['HandySense_setPin_SensorError'] = function(block) {
    var value_SensorError1 = Blockly.JavaScript.valueToCode(block, 'SensorError1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_SensorError2 = Blockly.JavaScript.valueToCode(block, 'SensorError2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_SensorError3 = Blockly.JavaScript.valueToCode(block, 'SensorError3', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `setPin_ErrorSensor(${value_SensorError1},${value_SensorError2},${value_SensorError3});`;
    return code;
  };
  Blockly.JavaScript['HandySense_statusRelay'] = function(block) {
    var dropdown_Relay_ch = block.getFieldValue('Relay_ch');
    var code = `RelayStatus[${dropdown_Relay_ch}]`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  Blockly.JavaScript['HandySense_Set_statusRelay'] = function(block) {
    //var value_analog_RawData = Blockly.JavaScript.valueToCode(block, 'RawAnalog', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_Relay_ch = block.getFieldValue('Relay_ch');
    var value_Relay_Status = Blockly.JavaScript.valueToCode(block, 'Relay_Status', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `RelayStatus[${dropdown_Relay_ch}] = ${value_Relay_Status};\n`;
    return code;
  };
  Blockly.JavaScript['HandySense_Update_StatusRelay'] = function(block) {
    var code = `check_sendData_status = 1;\n`;
    return code;
  };
  
  Blockly.JavaScript['HandySense_setPin_OldPCB'] = function(block) {
    var code = `LED_WIFI = 26;\nLED_SERVER = 27;\n
                setPin_Relay(25,4,12,13);
                setPin_ErrorSensor(19,18,5);\n
                type_RTC = 0;
    `;
    return code;
  };
  Blockly.JavaScript['HandySense_statusSensor'] = function(block) {
    var dropdown_Sensor_type = block.getFieldValue('Sensor_type');
    var code = `ErrorSensor_Status[${dropdown_Sensor_type}]`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  Blockly.JavaScript['HandySense_Map'] = function(block) {
    var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);
    var value_in_min = Blockly.JavaScript.valueToCode(block, 'in_min', Blockly.JavaScript.ORDER_ATOMIC);
    var value_in_max = Blockly.JavaScript.valueToCode(block, 'in_max', Blockly.JavaScript.ORDER_ATOMIC);
    var value_out_min = Blockly.JavaScript.valueToCode(block, 'out_min', Blockly.JavaScript.ORDER_ATOMIC);
    var value_out_max = Blockly.JavaScript.valueToCode(block, 'out_max', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `map(${value_input},${value_in_min},${value_in_max},${value_out_min},${value_out_max})`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };