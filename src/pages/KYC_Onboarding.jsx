import React from 'react'
import Onboarding from '../components/Project/KYC_Onboarding/Onboarding'
import Why_Choose from '../components/Project/KYC_Onboarding/Why_Choose'
import How_works from '../components/Project/KYC_Onboarding/How_work'
import Compliance_Security from '../components/Project/KYC_Onboarding/Compliance_Security'
import UseCases from '../components/Project/KYC_Onboarding/UseCases'
import ClientSuccess from '../components/Project/KYC_Onboarding/ClientSuccess'

const KYC_Onboarding = () => {
    return (
        <>
            <Onboarding />
            <Why_Choose />
            <How_works />
            <Compliance_Security />
            <UseCases />
            <ClientSuccess />
        </>
    )
}

export default KYC_Onboarding