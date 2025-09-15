import { calculateBiorhythms } from "./biorhythms";

it ('calculates the physical biorhythm', () => {
    const biorhythm = calculateBiorhythms('1999-12-31', '2022-12-31')
    expect(biorhythm.physical).toBeCloseTo(0.9977); 
});

it ('calculates the emotional biorhythm', () => {
    const biorhythm = calculateBiorhythms('1999-12-31', '2022-12-31')
    expect(biorhythm.emotional).toBeCloseTo(0.2225);
});

it ('calculates the intellectual biorhythm', () => {
    const biorhythm = calculateBiorhythms('1999-12-31', '2022-12-31')
    expect(biorhythm.intellectual).toBeCloseTo(-0.4582);
});