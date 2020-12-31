import styled from "styled-components";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";
import { Alphabet, Letters } from "../App";
import { device } from "../breakpoints";

interface ChartProps {
  frequencies: Alphabet;
  length: number;
  sort?: boolean;
}
const ChartContainer = styled.div`
  width: 70%;
  @media only screen and ${device.sm}{
    width: 100%;
  }
`;
const Chart: React.FC<ChartProps> = ({ frequencies, length, sort }) => {
  let array: {letter: string, frequency: number}[] = Object.keys(frequencies).map((item) => ({
    letter: item,
    frequency: frequencies[item as Letters]
      ? frequencies[item as Letters] / length
      : 0,
  }));
  if (sort) {
    array = array.sort((a, b) => {
      return a.frequency > b.frequency ? -1 : 1;
  });
}

  return (
    <ChartContainer>
      <VictoryChart
        // adding the material theme provided with Victory
        theme={VictoryTheme.material}
        domainPadding={20}
      >
        <VictoryAxis tickFormat={array.map(x => x.letter)} />
        <VictoryAxis dependentAxis tickFormat={(x: number) => x.toFixed(2)} />
        <VictoryBar data={array} x="letter" y="frequency" />
      </VictoryChart>
    </ChartContainer>
  );
};

export default Chart;
