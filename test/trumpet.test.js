const {Fingering, TrumpetFingerings} = require('../js/trumpet.js');


test('Fingering', () => {
    const f = new Fingering(true, true, false);
    expect(f.p1).toBeTruthy();
    expect(f.p2).toBeTruthy();
    expect(f.p3).toBeFalsy();
});

test('TrumpetFingerings', () => {
    const map = TrumpetFingerings.ID_FINGERING_MAP;
    expect(map[31].fingerings[0].p2).toBeTruthy();
    expect(map[34].fingerings[1].p3).toBeTruthy();    
});
