import type {
  ActionFunctionArgs,
  LoaderFunctionArgs,
} from 'react-router';
import { RPPHistoryModule } from '~/modules/RPPHistoryModule';
import { RPPHistoryAction } from '~/modules/RPPHistoryModule/action';
import { RPPHistoryLoader } from '~/modules/RPPHistoryModule/loader';

export async function loader(args: LoaderFunctionArgs) {
  return RPPHistoryLoader(args);
}

export async function action(args: ActionFunctionArgs) {
  return RPPHistoryAction(args);
}

export default function RPPHistoryPage() {
  return <RPPHistoryModule />;
}
