module.exports = [
	{
		name : "HandySense",
		blocks : [
    {xml: `<sep gap="32"></sep><label text="คำสั่งที่ใช้งานในฟังก์ชั่น Setup" web-class="headline"></label>`},
      'HandySense_setPin_OldPCB',
		  'HandySense_Setup',
      'HandySense_setTime_Interval_Sensor',
      'HandySense_setTime_Interval_publishData',
      {
        xml:
        `<block type="HandySense_setPin_Relay">
                <value name="RelayPin1">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
                <value name="RelayPin2">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
                <value name="RelayPin3">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
                <value name="RelayPin4">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
            </block>`
      },
      {
        xml:
        `<block type="HandySense_setPin_SensorError">
                <value name="SensorError1">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
                <value name="SensorError2">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
                <value name="SensorError3">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
            </block>`
      },
      {xml: `<sep gap="32"></sep><label text="คำสั่งที่ใช้งานในฟังก์ชั่น Loop" web-class="headline"></label>`},
      {
        xml:
        `<block type="HandySense_Update">
                <value name="Soil_RawData">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
                <value name="Light_RawData">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
                <value name="Temp_RawData">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
                <value name="Hum_RawData">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
            </block>`
      },
      'HandySense_CalSoilSensor',
      'HandySense_statusRelay',
      'HandySense_Set_statusRelay',
      'HandySense_Update_StatusRelay',
      'HandySense_statusSensor',
      'HandySense_Map',
      {xml: `<sep gap="32"></sep><label text="Web สำหรับใช้งาน Application" web-class="headline"></label>`},
      {xml: `<sep gap="32"></sep><label text="https://handy-sense-netpie.web.app/" web-class="headline"></label>`},
		]
	}	
];