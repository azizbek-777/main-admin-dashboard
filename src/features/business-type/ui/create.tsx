import { Stack } from '@mantine/core'
import { ErrorAlert } from '@/components/error-alert/error-alert'
import { useMainTranslation } from '@/shared/hooks/use-main-translation'
import { useCreateBusinessTypeMutation } from '../queries'
import { BusinessTypeForm } from './form'
import { BusinessTypeFormBody } from '../types'

export const Create = () => {
    const { mutateAsync, isPending, error, isError } = useCreateBusinessTypeMutation()
    const t = useMainTranslation()

    const handleSubmit = async (values: BusinessTypeFormBody) => {
        try {
            await mutateAsync(values)
        } catch (error) {
            return Promise.reject(error)
        }
    }

    return (
        <Stack>
            {isError && <ErrorAlert>{error?.message}</ErrorAlert>}
            <BusinessTypeForm
                submitFn={handleSubmit}
                loading={isPending}
                title={t('createForm')}
            />
        </Stack>
    )
}
