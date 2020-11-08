const { useContext, useCallback } = require("react");
const { AppContext } = require("../App");
const { UNIT } = require("../constants");

const useLocalization = () => {
  const { selectedUnit } = useContext(AppContext);

  const calculateDegrees = useCallback(
    (number) => {
      if (selectedUnit === UNIT.CELSIUS) return number;

      return number * 1.8 + 32;
    },
    [selectedUnit]
  );

  return {
    calculateDegrees
  };
};

export default useLocalization;
