import type {
  LoaderFunctionArgs,
} from 'react-router';
import { RPPHistoryModule } from '~/modules/RPPHistoryModule';
import { RPPHistoryLoader } from '~/modules/RPPHistoryModule/loader';

export default function RPPHistoryPage() {
  return <RPPHistoryModule />;
}

export async function loader(args: LoaderFunctionArgs) {
  return RPPHistoryLoader(args);
}

