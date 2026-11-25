import { PageTitle } from '../sell/components/title';
import { SITE_NAME } from '@/configs/site';
import CaseList from './components/caseList';

const ReviewPage = () => (
    <main>
        <PageTitle title="내 차 판매 후기">
            {SITE_NAME}을 이용해주신 고객님들의
            <br /> 소중한 실시간 후기를 확인해보세요
        </PageTitle>
        <CaseList />
    </main>
);

export default ReviewPage;
