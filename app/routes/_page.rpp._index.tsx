import type {
  ActionFunctionArgs,
  LoaderFunctionArgs,
} from 'react-router';
import { RPPModule } from '~/modules/RPPModule';
import { RPPAction } from '~/modules/RPPModule/action';
import { RPPLoader } from '~/modules/RPPModule/loader';

export async function loader(args: LoaderFunctionArgs) {
  return RPPLoader(args);
}

export async function action(args: ActionFunctionArgs) {
  return RPPAction(args);
}

export default function RPPPage() {
  return <RPPModule />;
}
