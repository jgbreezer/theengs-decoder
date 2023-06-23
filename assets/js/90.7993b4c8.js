(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{387:function(e,t,a){"use strict";a.r(t);var s=a(14),i=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"adding-decoders"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adding-decoders"}},[e._v("#")]),e._v(" Adding decoders")]),e._v(" "),t("p",[e._v("Adding your device protocol to Theengs decoder enable to increase interoperability and to create new use cases with your device. You will find below some guidance to do that.")]),e._v(" "),t("p",[e._v("You can do a pull request directly to the "),t("a",{attrs:{href:"https://github.com/theengs/decoder",target:"_blank",rel:"noopener noreferrer"}},[e._v("Repository"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h1",{attrs:{id:"adding-device-decoding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adding-device-decoding"}},[e._v("#")]),e._v(" Adding device decoding")]),e._v(" "),t("p",[e._v("Device decode specifications are located in a json file, example "),t("a",{attrs:{href:"../../src/device_json.h"}},[e._v("HHCCJCY01HHCC_json.h")]),e._v(". The format is:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('R""""(\n{\n   "brand":"Xiaomi",\n   "model":"miflora",\n   "model_id":"HHCCJCY01HHCC",\n   "condition":["servicedata", "contain", "209800"],\n   "properties":{\n      "tempc":{\n         "condition":["servicedata", 25, "4"],\n         "decoder":["value_from_hex_data", "servicedata", 30, 4, true],\n         "post_proc":["/", 10]\n      },\n      "moi":{\n         "condition":["servicedata", 25, "8"],\n         "decoder":["value_from_hex_data", "servicedata", 30, 2, false]\n      },\n      "lux":{\n         "condition":["servicedata", 25, "7"],\n         "decoder":["value_from_hex_data", "servicedata", 30, 6, true]\n      },\n      "fer":{\n         "condition":["servicedata", 25, "9"],\n         "decoder":["value_from_hex_data", "servicedata", 30, 4, true]\n      }\n   }\n})"""",\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br"),t("span",{staticClass:"line-number"},[e._v("22")]),t("br"),t("span",{staticClass:"line-number"},[e._v("23")]),t("br"),t("span",{staticClass:"line-number"},[e._v("24")]),t("br"),t("span",{staticClass:"line-number"},[e._v("25")]),t("br"),t("span",{staticClass:"line-number"},[e._v("26")]),t("br")])]),t("p",[e._v("Each device must provide a "),t("code",[e._v("brand")]),e._v(", "),t("code",[e._v("model")]),e._v(", "),t("code",[e._v("model_id")]),e._v(", "),t("code",[e._v("condition")]),e._v(", and "),t("code",[e._v("properties")]),e._v(".")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("brand")]),e._v(" = brand name of the device.")]),e._v(" "),t("li",[t("code",[e._v("model")]),e._v(" = model name of the device.")]),e._v(" "),t("li",[t("code",[e._v("model_id")]),e._v(" = model id number of the device.")])]),e._v(" "),t("h3",{attrs:{id:"tag-property"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tag-property"}},[e._v("#")]),e._v(" Tag property")]),e._v(" "),t("p",[e._v("Each device should also have an encoded "),t("strong",[e._v("tag")]),e._v(" property to, at the minimum, define the device type for a decoder, and additionally define other descriptive properties to be published. This enables projects to adjust their display and scanning behaviour accordingly.")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",{attrs:{colspan:"3"}},[e._v("tag encoding")])])]),e._v(" "),t("tbody",[t("tr",[t("td",{attrs:{rowspan:"21"}},[e._v("Byte[0]")]),e._v(" "),t("td",{attrs:{rowspan:"21"}},[e._v('Device Type > "type":')]),e._v(" "),t("td",{attrs:{rowspan:"1"}},[e._v("0 - Reserved")])]),e._v(" "),t("tr",[t("td",{attrs:{rowspan:"1"}},[e._v("1 - THB - temperature, humidity, battery")])]),e._v(" "),t("tr",[t("td",{attrs:{rowspan:"1"}},[e._v("2 - THBX - temperature, humidity, battery, extras")])]),e._v(" "),t("tr",[t("td",{attrs:{rowspan:"1"}},[e._v("3 - BBQ - temperatures with several probes")])]),e._v(" "),t("tr",[t("td",{attrs:{rowspan:"1"}},[e._v("4 - CTMO - contact and/or motion sensors")])]),e._v(" "),t("tr",[t("td",{attrs:{rowspan:"1"}},[e._v("5 - SCALE - weight scales")])]),e._v(" "),t("tr",[t("td",{attrs:{rowspan:"1"}},[e._v("6 - BCON - iBeacon protocol")])]),e._v(" "),t("tr",[t("td",{attrs:{rowspan:"1"}},[e._v("7 - ACEL - acceleration")])]),e._v(" "),t("tr",[t("td",{attrs:{rowspan:"1"}},[e._v("8 - BATT - battery")])]),e._v(" "),t("tr",[t("td",{attrs:{rowspan:"1"}},[e._v("9 - PLANT - plant sensors")])]),e._v(" "),t("tr",[t("td",{attrs:{rowspan:"1"}},[e._v("10 - TIRE - tire pressure monitoring system")])]),e._v(" "),t("tr",[t("td",{attrs:{rowspan:"1"}},[e._v("11 - BODY - health monitoring devices")])]),e._v(" "),t("tr",[t("td",{attrs:{rowspan:"1"}},[e._v("12 - ENRG - energy monitoring devices")])]),e._v(" "),t("tr",[t("td",{attrs:{rowspan:"1"}},[e._v("13 - WCVR - window covering devices")])]),e._v(" "),t("tr",[t("td",{attrs:{rowspan:"1"}},[e._v("14 - ACTR - ON/OFF actuators")])]),e._v(" "),t("tr",[t("td",{attrs:{rowspan:"1"}},[e._v("15 - AIR - air environmental monitoring devices")])]),e._v(" "),t("tr",[t("td",{attrs:{rowspan:"1"}},[e._v("16 - TRACK - bluetooth tracker")])]),e._v(" "),t("tr",[t("td",{attrs:{rowspan:"1"}},[e._v("17 - BTN - button")])]),e._v(" "),t("tr",[t("td",{attrs:{rowspan:"1"}},[e._v("18-253 - Reserved")])]),e._v(" "),t("tr",[t("td",{attrs:{rowspan:"1"}},[e._v("254 - RMAC - known random MAC address devices")])]),e._v(" "),t("tr",[t("td",{attrs:{rowspan:"1"}},[e._v("255 - UNIQ - unique devices")])]),e._v(" "),t("tr",[t("td",{attrs:{rowspan:"8"}},[e._v("Byte[1]")]),e._v(" "),t("td",{attrs:{rowspan:"8"}},[e._v("Additional properties")]),e._v(" "),t("td",{attrs:{rowspan:"1"}},[e._v("Bits[7-5] - Reserved")])]),e._v(" "),t("tr",[t("td",{attrs:{rowspan:"1"}},[e._v('Bit[4] Encrypted device data > "encr":')])]),e._v(" "),t("tr",[t("td",{attrs:{rowspan:"1"}},[e._v('Bit[3] Device compatible with presence tracking > "track":')])]),e._v(" "),t("tr",[t("td",{attrs:{rowspan:"1"}},[e._v('Bit[2] Requires continuous scanning > "cont":')])]),e._v(" "),t("tr",[t("td",{attrs:{rowspan:"1"}},[e._v('Bit[1] Requires active scanning > "acts":')])]),e._v(" "),t("tr",[t("td",{attrs:{rowspan:"1"}},[e._v('Bit[0] Is NOT Company ID compliant > "cidc":')])])])]),e._v(" "),t("p",[t("strong",[e._v("cidc")]),e._v(' - Whenever a decoder is based on "manufacturerdata" and the first bytes do not comply with the '),t("a",{attrs:{href:"https://www.bluetooth.com/specifications/assigned-numbers/company-identifiers/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bluetooth SIG's company identifier convention"),t("OutboundLink")],1),e._v(', this should be set to 1/true, to then produce "cidc":false in the published message.')]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('   "brand":"Otio/BeeWi",\n   "model":"Door & Window Sensor",\n   "model_id":"BSDOO",\n   "tag":"0405",\n   …\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("p",[e._v("will have "),t("code",[e._v('… "type":"CTMO","cidc":false,"cont":true …')]),e._v(" in the published message.")]),e._v(" "),t("h3",{attrs:{id:"condition"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#condition"}},[e._v("#")]),e._v(" Condition")]),e._v(" "),t("p",[t("code",[e._v("condition")]),e._v(" is a JSON array, which must contain as the first parameter, the data source to test for the condition. Valid inputs are:")]),e._v(" "),t("ul",[t("li",[e._v('"servicedata"')]),e._v(" "),t("li",[e._v('"manufacturerdata"')]),e._v(" "),t("li",[e._v('"name"')]),e._v(" "),t("li",[e._v('"uuid"')])]),e._v(" "),t("p",[e._v('The second parameter is variable. If required, further qualification can be made by setting a conditional data length in the case of "servicedata" or "manufacturerdata" as the first condition. This is an operator in the form of '),t("code",[e._v('">" , ">=" , "=" , "<" , "<="')]),e._v(" followed by the third parameter being a numeric value that specifies the length of the data to accept. If no data length is defined the second parameter must indicate how the data should be tested. Valid inputs are:")]),e._v(" "),t("ul",[t("li",[e._v('"contain" tests if the specified value (see below) exists the data source')]),e._v(" "),t("li",[e._v('"index" tests if the specified value exists at the index location (see below) in the data source')]),e._v(" "),t("li",[e._v('"mac@index" tests if the device\'s MAC address exists at the index location (see below) in the data source')]),e._v(" "),t("li",[e._v('"revmac@index" tests if the device\'s MAC address exists octet-reversed at the index location (see below) in the data source')])]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),t("p",[e._v('For compatibility of a decoder for running successfully on an OS which masks the real MAC addresses of devices by generic uuids, like macOS and iOS, an alternative model condition with the name "conditionnomac" needs to be defined in addition to "condition" if the latter contains "mac@index" or "revmac@index".')])]),e._v(" "),t("p",[e._v("Examples:\n"),t("code",[e._v('"condition":["servicedata", "index", 0, "0804"')]),e._v(" -- no data length check\n"),t("code",[e._v('"condition":["servicedata", ">=", 40, "index", 0, "0804"')]),e._v(" -- data length must be equal to or greater than 40 bytes")]),e._v(" "),t("p",[e._v("The third parameter (fifth if data length is specified) can be either the index value or the data value to find. If the second (fourth if data length specified) parameter is "),t("code",[e._v("contain")]),e._v(", the next parameter should be the value to look for in the data source. If the second (fourth if data length specified) parameter is "),t("code",[e._v("index")]),e._v(", "),t("code",[e._v("mac@index")]),e._v(" or "),t("code",[e._v("revmac@index")]),e._v(" the next parameter should be the location in the data source to look for the value.")]),e._v(" "),t("p",[t("code",[e._v("condition")]),e._v(' can have multiple conditions chained together using "|" and "&" between them.'),t("br"),e._v("\nFor example: "),t("code",[e._v('"condition":["servicedata", "index", 0, "0804", "|", "servicedata", "index", 0, "8804"]')]),t("br"),e._v('\nThis will match if the service data at index 0 is "0804" '),t("code",[e._v("OR")]),e._v(' "8804".')]),e._v(" "),t("p",[t("code",[e._v("condition")]),e._v(" can contain JSON arrays that can be processed separately. This allows for nesting of detection tests such as:"),t("br"),e._v(" "),t("code",[e._v('"condition": [["servicedata", "index", 0, "1234", "&" "servicedata", "index", 5, "5678"], "|", "servicedata", "index", 30, "abcd"]')]),t("br"),e._v("\nThis will result in a positive detection if the service data at index "),t("code",[e._v("0")]),e._v(" == "),t("code",[e._v("0x1234")]),e._v(" and the service data at index "),t("code",[e._v("5")]),e._v(" == "),t("code",[e._v("0x5678")]),e._v(", otherwise, if the service data at index "),t("code",[e._v("30")]),e._v(" == "),t("code",[e._v("0xabcd")]),e._v(", the result will also be positive.")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),t("p",[e._v('Nesting is discouraged from use wherever possible as the recursive nature may cause stack overflowing in some circumstances.\nIt should only be used if absolutely necessary, as in the above example.\nIf all the conditions in an array bracket are chained with "|", as in\n'),t("code",[e._v('"condition": [["servicedata", "index", 0, "abcd", "|", "servicedata", "index", 0, "efef"], "&", "servicedata", "index", 5, "1212"]')]),e._v("\nthis could be re-written as\n"),t("code",[e._v('"condition": ["servicedata", "index", 0, "abcd", "|", "servicedata", "index", 0, "efef", "&", "servicedata", "index", 5, "1212"]')]),t("br"),e._v("\nmaking sure the additional AND condition is at the end. This has the same result, without nesting.")])]),e._v(" "),t("p",[t("code",[e._v("condition")]),e._v(' NOT(!) testing; Anytime a condition test value is preceded by a "!", the inverse of the result will be used to determine the result.'),t("br"),e._v('\nExample: `"condition": ["servicedata", "index", 30, "!", "abcd", "&", "servicedata", "index", 0, "1234"]'),t("br"),e._v("\nIf the value of the service data at index 30 is not 0xabcd and the data at index 0 is 0x1234, the result is a positive detection.")]),e._v(" "),t("h3",{attrs:{id:"properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),t("p",[e._v("Properties is a nested JSON object containing one or more JSON objects. In the example above it looks like:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(' "properties":{\n      "tempc":{\n         "condition":["servicedata", 25, "4"],\n         "decoder":["value_from_hex_data", "servicedata", 30, 4, true],\n         "post_proc":["/", 10]\n      },\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("p",[e._v('Here we have a single property that defines a value that we want to decode. The key "tempc" will be used as the key in the JsonObject provided when '),t("code",[e._v("decodeBLEJson(JsonObject)")]),e._v(' is called. "tempc" in this example is another JSON object that has an (optional, explained below) '),t("code",[e._v("condition")]),e._v(", "),t("code",[e._v("decoder")]),e._v(", and "),t("code",[e._v("post_proc")]),e._v(".")]),e._v(" "),t("p",[t("code",[e._v("condition")]),e._v(" is a JSON array. The first parameter defines the data source of the condition to test and must be one of:")]),e._v(" "),t("ul",[t("li",[e._v('"servicedata"')]),e._v(" "),t("li",[e._v('"manufacturerdata"')])]),e._v(" "),t("p",[e._v("The second parameter is the index of the data source to look for the value. Then the third parameter is the value to test for.")]),e._v(" "),t("p",[e._v("If a direct binary bit evaluation encoded in a hex digit is desired the third parameter is "),t("code",[e._v('"bit"')]),e._v(", the fourth parameter the bit position from "),t("code",[e._v("3-0")]),e._v(" and the fifth parameter the bit state "),t("code",[e._v("0")]),e._v(" or "),t("code",[e._v("1")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(' "properties":{\n      "hum":{\n         "condition":["servicedata", 10, "bit", 3, 0],\n         "decoder":["value_from_hex_data", "servicedata", 10, 2, false, false]\n      },\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("p",[e._v("The second parameter can also be an operator in the form of "),t("code",[e._v('">" , ">=" , "=" , "<" , "<="')]),e._v(", then followed by the third parameter being a numeric value that specifies the length of the data to accept for evaluation of the first parameter.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(' "properties":{\n      "tempc":{\n         "condition":["manufacturerdata", "=", 40],\n         "decoder":["value_from_hex_data", "manufacturerdata", 24, 4, true]\n      },\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("p",[e._v("If the condition is met the data will be decoded and added to the JsonObject.")]),e._v(" "),t("p",[t("code",[e._v("condition")]),e._v(" can contain JSON arrays that can be processed separately. This allows for nesting of detection tests such as:"),t("br"),e._v(" "),t("code",[e._v('"condition": [["servicedata", 25, "4", "&" "servicedata", 26, "5"], "|", "servicedata", 30, "abcd"]')]),t("br"),e._v("\nThis will result in a positive detection if the service data at index "),t("code",[e._v("25")]),e._v(" == "),t("code",[e._v("4")]),e._v(" and the service data at index "),t("code",[e._v("26")]),e._v(" == "),t("code",[e._v("5")]),e._v(", otherwise, if the service data at index "),t("code",[e._v("30")]),e._v(" == "),t("code",[e._v("0xabcd")]),e._v(", the result will also be positive.")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),t("p",[e._v('Nesting is discouraged from use wherever possible as the recursive nature may cause stack overflowing in some circumstances.\nIt should only be used if absolutely necessary, as in the above example.\nIf all the conditions in an array bracket are chained with "|", as in\n'),t("code",[e._v('"condition": [["servicedata", 20, "5", "|", "servicedata", 20, "6"], "&", "servicedata", 30, "a"]')]),e._v("\nthis could be re-written as\n"),t("code",[e._v('"condition": ["servicedata", 20 , "5", "|", "servicedata", 20, "6", "&", "servicedata", 30, "a"]')]),t("br"),e._v("\nmaking sure the additional AND condition is at the end. This has the same result, without nesting.")])]),e._v(" "),t("p",[e._v("Property conditions also allow for a NOT comparison, as in")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(' "properties":{\n      "tempc":{\n         "condition":["manufacturerdata", 24, "!", "ffff"],\n         "decoder":["value_from_hex_data", "manufacturerdata", 24, 4, true, false],\n         "post_proc":["/", 10]\n      },\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("p",[e._v("where then the fourth parameter is the value to test for.")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),t("p",[e._v('The NOT comparison is case sensitive! Therefore any NOT comparisons should be defined in lower case, as this is the format in which devices\' "servicedata" and "manufacturerdata" are being reported.')])]),e._v(" "),t("p",[t("code",[e._v("decoder")]),e._v(" is a JSON array that specifies the decoder function and parameters to decode the value.\nThe first parameter is the name of the function to call, The available functions are:")]),e._v(" "),t("ul",[t("li",[e._v('"value_from_hex_data"  - converts the hex string value into an '),t("code",[e._v("integer")]),e._v(" or "),t("code",[e._v("double")]),e._v(" type.")]),e._v(" "),t("li",[e._v('"bf_value_from_hex_data" - converts the (binary fraction) hex string value into a '),t("code",[e._v("double")]),e._v(" type.  This should be used when the hex data is represented in the format of "),t("code",[e._v("XX.XX")]),e._v(". For example: when "),t("code",[e._v("0x1a1e")]),e._v(" should output 26.30.")]),e._v(" "),t("li",[e._v('"string_from_hex_data" - converts the hex value to a string type.')]),e._v(" "),t("li",[e._v('"static_value" - sets the value to the static value specified if the condition is met.')]),e._v(" "),t("li",[e._v('"bit_static_value" - sets the value to either one of two given values, depending on the evaluated binary bit.')])]),e._v(" "),t("p",[e._v("The other parameters for the first three functions are:")]),e._v(" "),t("ul",[t("li",[e._v('"servicedata" or "manufacturerdata" Extract the value from the specified data.')]),e._v(" "),t("li",[e._v("24, The index of the data source where the value exists.")]),e._v(" "),t("li",[e._v("4, The length of the data in bytes (characters in the string).\nand additional boolean parameters applicable to the first two functions:")]),e._v(" "),t("li",[e._v("true/false, If the value in the data source should have it's endianness reversed before converting.")]),e._v(" "),t("li",[e._v("(optional)true/false, Sets if the resulting value can be a negative number. Defaults to true when omitted.")]),e._v(" "),t("li",[e._v('(optional)false/true, Sets if the "value_from_hex_data" decoding result is a '),t("code",[e._v("float")]),e._v(" instead of an "),t("code",[e._v("integer")]),e._v(" type. Defaults to false when omitted.")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(' "properties":{\n      "unit":{\n         "decoder":["bit_static_value", "servicedata", 1, 0, "kg", "lb"]\n      },\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[e._v('The parameters for the "bit_static_value" function are:')]),e._v(" "),t("ul",[t("li",[e._v('"servicedata" or "manufacturerdata" - extract the value from the specified data.')]),e._v(" "),t("li",[e._v("1, the index of the data source where the value exists.")]),e._v(" "),t("li",[e._v("0, the bit position from "),t("code",[e._v("3-0")]),e._v(".")]),e._v(" "),t("li",[e._v("The return value for bit state "),t("code",[e._v("0")]),e._v(".")]),e._v(" "),t("li",[e._v("The return value for bit state "),t("code",[e._v("1")]),e._v(".")])]),e._v(" "),t("p",[t("code",[e._v("post_proc")]),e._v(' This specifies any post processing of the resulting decoded value. This is a JSON array that should be written in the order that the operation order is desired. In the simple example the first parameter is the "/" divide operation and the second parameter (10) is the value to divide the result by. Multiple operations can be chained together in this array to perform more complex calculations.')]),e._v(" "),t("p",[e._v("Valid operations are:")]),e._v(" "),t("ul",[t("li",[e._v('"/" divide')]),e._v(" "),t("li",[e._v('"*" multiply')]),e._v(" "),t("li",[e._v('"+" add')]),e._v(" "),t("li",[e._v('"-" subtract')]),e._v(" "),t("li",[e._v('"%" modulo')]),e._v(" "),t("li",[e._v('"<" shift left')]),e._v(" "),t("li",[e._v('">" shift right')]),e._v(" "),t("li",[e._v('"!" Not (invert), useful for bool types')]),e._v(" "),t("li",[e._v('"&" Logical And the values')]),e._v(" "),t("li",[e._v('"min" the minimum allowed value')]),e._v(" "),t("li",[e._v('"max" the maximum allowed value')])]),e._v(" "),t("h4",{attrs:{id:"special-property-cal"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#special-property-cal"}},[e._v("#")]),e._v(" Special property .cal")]),e._v(" "),t("p",[e._v(".cal is a special property that can extracted from the provided data and used in calculations of other properties following it's definition. For example:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('"properties":{\n      ".cal":{\n         "decoder":["value_from_hex_data", "manufacturerdata", 16, 4, true],\n         "post_proc":["&", 16383]\n      },\n      "power":{\n         "decoder":["value_from_hex_data", "manufacturerdata", 4, 4, true],\n         "post_proc":["/", ".cal", "*", 60000]\n      }\n   }\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br")])]),t("p",[e._v("Here the calculation value extracted first from the data stream and used by the next property to calculate the data value.")]),e._v(" "),t("h4",{attrs:{id:"special-property-mac"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#special-property-mac"}},[e._v("#")]),e._v(' Special property "mac"')]),e._v(" "),t("p",[e._v('The "mac" property contains a device\'s MAC address if this is contained in the broadcast service- or manufacturerdata, with either forward or reversed octet order.')]),e._v(" "),t("p",[e._v('In such cases the "mac" property should be included in the decoder, so that these devices can have their proper MAC address assigned on iOS or macOS, which usually masks these with generic uuids.')]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('"properties":{\n      "mac":{\n         "decoder":["mac_from_hex_data", "servicedata", 4]\n      }\n\n      … or\n\n      "mac":{\n         "decoder":["revmac_from_hex_data", "servicedata", 4]\n      }\n\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br")])])])}),[],!1,null,null,null);t.default=i.exports}}]);