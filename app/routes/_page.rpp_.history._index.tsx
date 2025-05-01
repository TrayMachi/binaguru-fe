import type {
  ActionFunctionArgs,
  LoaderFunctionArgs,
} from 'react-router';
import { RPPHistoryIndexModule } from '~/modules/RPPHistoryIndexModule';
import { RPPHistoryIndexAction } from '~/modules/RPPHistoryIndexModule/action';
import { RPPHistoryIndexLoader } from '~/modules/RPPHistoryIndexModule/loader';

export async function loader(args: LoaderFunctionArgs) {
  return RPPHistoryIndexLoader(args);
}

export async function action(args: ActionFunctionArgs) {
  return RPPHistoryIndexAction(args);
}

export default function RPPHistoryIndexPage() {
  return <RPPHistoryIndexModule />;
}
