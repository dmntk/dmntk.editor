'use strict';

import DmnJS from 'dmn-js';

const viewer = new DmnJS({
  container: '#container'
});


try {
  const xml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<definitions xmlns="https://www.omg.org/spec/DMN/20191111/MODEL/"
             xmlns:di="http://www.omg.org/spec/DMN/20180521/DI/"
             xmlns:dc="http://www.omg.org/spec/DMN/20180521/DC/"
             xmlns:dmndi="https://www.omg.org/spec/DMN/20191111/DMNDI/"
             namespace="https://dmntk.io/2_0001"
             name="compliance-level-2-test-0001"
             id="_c910c9ba-c584-4ac9-a773-1e6de185cd85">
    <description>
        Compliance level 2. Test 0001.
        This example is based on original file taken from:
        https://github.com/dmn-tck/tck/blob/master/TestCases/compliance-level-2/0001-input-data-string/0001-input-data-string.dmn
    </description>
    <decision name="Greeting Message" id="_75b3add2-4d36-4a19-a76c-268b49b2f436">
        <variable typeRef="string" name="Greeting Message"/>
        <informationRequirement id="_8c935b50-10b7-426b-80a9-dddb4264b4a9">
            <requiredInput href="#_cba86e4d-e91c-46a2-9176-e9adf88e15db"/>
        </informationRequirement>
        <literalExpression>
            <text>"Hello " + Full Name</text>
        </literalExpression>
    </decision>
    <inputData name="Full Name" id="_cba86e4d-e91c-46a2-9176-e9adf88e15db">
        <variable typeRef="string" name="Full Name"/>
    </inputData>
    <dmndi:DMNDI>
        <dmndi:DMNDiagram id="_d3a3312e-5924-4f7b-ac0e-232ef9203ff6">
            <dmndi:DMNShape dmnElementRef="_75b3add2-4d36-4a19-a76c-268b49b2f436" id="_ebf33cfc-0ee3-4708-af8b-91c52237b7d6">
                <dc:Bounds height="61.0" width="154.0" x="150.0" y="150.0"/>
            </dmndi:DMNShape>
            <dmndi:DMNShape dmnElementRef="_cba86e4d-e91c-46a2-9176-e9adf88e15db" id="_48ea7a1d-2575-4cb7-8b63-8baa4cb3b371">
                <dc:Bounds height="60.0" width="154.0" x="150.0" y="330.0"/>
            </dmndi:DMNShape>
            <dmndi:DMNEdge dmnElementRef="_8c935b50-10b7-426b-80a9-dddb4264b4a9" id="_e9a73517-0ba2-4b31-b308-82279ae21591">
                <di:waypoint x="227.0" y="330.0"/>
                <di:waypoint x="227.0" y="211.0"/>
            </dmndi:DMNEdge>
        </dmndi:DMNDiagram>
    </dmndi:DMNDI>
</definitions>`;

  const {warnings} = await viewer.importXML(xml);

  if (warnings.length) {
    console.log('DMNTK: import with warnings', warnings);
  } else {
    console.log('DMNTK: import successful');
  }

  viewer.getActiveViewer().get('canvas').zoom('fit-viewport');
} catch (err) {
  console.log('something went wrong:', err);
}