describe('Test', () => {
    it('should pass', () => {
        expect(2).toEqual(2)
    });

    it.failing('should fail', () => {
        expect(2).toEqual(3);
    });

    it.failing.each([4,5,6])('each should fail', (x: number) => {
        expect(2).toEqual(x);
    });
});
