import median from "../src/median";

// Test pour vérifier le médian d'un tableau de nombres positifs
test("on calcule le médian d'un tableau d'entier positifs", () => {
    expect(median([1,2,3,4,5])).toBe(3);
})