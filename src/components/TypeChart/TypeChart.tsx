import styles from './TypeChart.module.css';

interface TypeChartProps {
  type: string;
}

export function TypeChart({ type }: TypeChartProps) {
  return <div className={styles.container}>{`Type: ${type}`}</div>;
}
