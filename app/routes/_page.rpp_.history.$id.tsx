import type {
  ActionFunctionArgs,
  LoaderFunctionArgs,
} from 'react-router';
import { RPPHistoryByIdModule } from '~/modules/RPPHistoryByIdModule';
import { RPPHistoryByIdAction } from '~/modules/RPPHistoryByIdModule/action';
import { RPPHistoryByIdLoader } from '~/modules/RPPHistoryByIdModule/loader';

export async function loader(args: LoaderFunctionArgs) {
  return RPPHistoryByIdLoader(args);
}

export async function action(args: ActionFunctionArgs) {
  return RPPHistoryByIdAction(args);
}

export default function RPPHistoryByIdPage() {
  return <RPPHistoryByIdModule />;
}
