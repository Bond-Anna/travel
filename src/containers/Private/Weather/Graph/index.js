import { ResponsiveLine } from '@nivo/line'
// import { linearGradientDef } from '@nivo/core'

// const data = [
//   {
//     id: 'japan',
//     color: 'hsl(23, 70%, 50%)',
//     data: [
//       {
//         x: 'plane',
//         y: 25,
//       },
//       {
//         x: 'helicopter',
//         y: 162,
//       },
//       {
//         x: 'boat',
//         y: 77,
//       }
//     ],
//   },
// ]
const MyResponsiveLine = ({ data }) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
    xScale={{ type: 'linear' }}
    yScale={{
      type: 'linear',
      min: 'auto',
      max: 'auto',
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    curve="natural"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: 'bottom',
      tickSize: 0,
      tickPadding: 5,
      tickRotation: 0,
      legend: false,
    }}
    axisLeft={null}
    enableGridX={false}
    enableGridY={false}
    defs={[
      {
        id: 'gradientC',
        type: 'linearGradient',
        colors: [
          { offset: 0, color: '#FFA25B' },
          { offset: 100, color: '#FFF4F4' },
        ],
      },
    ]}
    fill={[{ match: '*', id: 'gradientC' }]}
    lineWidth={0}
    pointSize={2}
    pointColor={{ theme: 'background' }}
    pointBorderColor="black"
    enablePointLabel={true}
    pointLabel="y"
    pointLabelYOffset={-10}
    enableArea={true}
    areaOpacity={0.3}
    crosshairType="top-left"
    useMesh={true}
    legends={[]}
  />
)
export default MyResponsiveLine
