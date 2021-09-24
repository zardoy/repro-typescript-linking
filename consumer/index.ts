import { ProjectName } from '.generated'
import { ProjectName as ProjectName2 } from 'source'

type Expect<T1, T2 extends T1> = any

//@ts-expect-error ProjectName should be `consumer` and ProjectName2 should be `source`
type A = Expect<ProjectName, ProjectName2>
