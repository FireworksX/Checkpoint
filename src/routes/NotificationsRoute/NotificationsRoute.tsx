import { FC } from 'react'
import * as Styled from './styles'
import { ROUTE_NAMES } from 'src/router/constants'
import { route } from 'src/hoc/route'
import PageHeaderButtonBack from 'src/widgets/PageHeader/components/PageHeaderButtonBack/PageHeaderButtonBack'
import { withValidateUser } from 'src/hoc/withValidateUser'

interface NotificationsRouteProps {
  className?: string
}

const data = [
  {
    title: 'Now',
    count: 3,
    list: [
      {
        avatar:
          'https://sun9-73.userapi.com/impg/vLGipLuW2F2hBJFS2euTN5nAtzH2yc-GqKDoVw/htpuU4MmP9U.jpg?size=1440x1800&quality=96&sign=4bd1eb9f93741b5340e34556f2b9de94&type=album',
        name: 'rosebertham',
        mode: 'shared',
        time: '3m'
      },
      {
        avatar:
          'https://i.discogs.com/zHU-7pitO1R6sYf-EAGUJnXh-8JjExwz7pWcIML0dlk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWltYWdlcy9SLTE1/Mzg0NjQzLTE1OTA2/NzI0ODItODY1OS5q/cGVn.jpeg',
        name: 'denabramov',
        mode: 'like',
        time: '4m',
        cover: 'https://pbs.twimg.com/media/EsSTNAHVoAIi_fk.jpg'
      },
      {
        avatar:
          'https://sun9-10.userapi.com/s/v1/ig2/jjGxtVxsVV_Kf1dybCMpAxgiSU5VMFQa7VNUHLkO9m4iZ2tDF6s10XNsZL4XsUziVshy2j1P_lmH3k6wkmypPFPo.jpg?size=400x400&quality=95&crop=524,412,1124,1124&ava=1',
        name: 'tatiana9',
        mode: 'like',
        time: '7m',
        cover: 'https://pbs.twimg.com/media/EsSTNAHVoAIi_fk.jpg'
      }
    ]
  },
  {
    title: 'Today',
    count: 4,
    list: [
      {
        avatar:
          'https://sun9-73.userapi.com/impg/vLGipLuW2F2hBJFS2euTN5nAtzH2yc-GqKDoVw/htpuU4MmP9U.jpg?size=1440x1800&quality=96&sign=4bd1eb9f93741b5340e34556f2b9de94&type=album',
        name: 'rosebertham',
        mode: 'shared',
        time: '3m'
      },
      {
        avatar:
          'https://i.discogs.com/zHU-7pitO1R6sYf-EAGUJnXh-8JjExwz7pWcIML0dlk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWltYWdlcy9SLTE1/Mzg0NjQzLTE1OTA2/NzI0ODItODY1OS5q/cGVn.jpeg',
        name: 'denabramov',
        mode: 'like',
        time: '4m',
        cover: 'https://pbs.twimg.com/media/EsSTNAHVoAIi_fk.jpg'
      },
      {
        avatar:
          'https://sun9-10.userapi.com/s/v1/ig2/jjGxtVxsVV_Kf1dybCMpAxgiSU5VMFQa7VNUHLkO9m4iZ2tDF6s10XNsZL4XsUziVshy2j1P_lmH3k6wkmypPFPo.jpg?size=400x400&quality=95&crop=524,412,1124,1124&ava=1',
        name: 'tatiana9',
        mode: 'like',
        time: '7m',
        cover: 'https://pbs.twimg.com/media/EsSTNAHVoAIi_fk.jpg'
      },
      {
        avatar:
          'https://i.discogs.com/zHU-7pitO1R6sYf-EAGUJnXh-8JjExwz7pWcIML0dlk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWltYWdlcy9SLTE1/Mzg0NjQzLTE1OTA2/NzI0ODItODY1OS5q/cGVn.jpeg',
        name: 'denabramov',
        mode: 'like',
        time: '10m',
        cover: 'https://i1.sndcdn.com/artworks-000397739259-slqvx2-t500x500.jpg'
      }
    ]
  },
  {
    title: 'Tomorrow',
    count: 7,
    list: [
      {
        avatar:
          'https://sun9-73.userapi.com/impg/vLGipLuW2F2hBJFS2euTN5nAtzH2yc-GqKDoVw/htpuU4MmP9U.jpg?size=1440x1800&quality=96&sign=4bd1eb9f93741b5340e34556f2b9de94&type=album',
        name: 'rosebertham',
        mode: 'shared',
        time: '3m'
      },
      {
        avatar:
          'https://i.discogs.com/zHU-7pitO1R6sYf-EAGUJnXh-8JjExwz7pWcIML0dlk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWltYWdlcy9SLTE1/Mzg0NjQzLTE1OTA2/NzI0ODItODY1OS5q/cGVn.jpeg',
        name: 'denabramov',
        mode: 'like',
        time: '4m',
        cover: 'https://pbs.twimg.com/media/EsSTNAHVoAIi_fk.jpg'
      },
      {
        avatar:
          'https://sun9-10.userapi.com/s/v1/ig2/jjGxtVxsVV_Kf1dybCMpAxgiSU5VMFQa7VNUHLkO9m4iZ2tDF6s10XNsZL4XsUziVshy2j1P_lmH3k6wkmypPFPo.jpg?size=400x400&quality=95&crop=524,412,1124,1124&ava=1',
        name: 'tatiana9',
        mode: 'like',
        time: '7m',
        cover: 'https://pbs.twimg.com/media/EsSTNAHVoAIi_fk.jpg'
      },
      {
        avatar:
          'https://i.discogs.com/zHU-7pitO1R6sYf-EAGUJnXh-8JjExwz7pWcIML0dlk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWltYWdlcy9SLTE1/Mzg0NjQzLTE1OTA2/NzI0ODItODY1OS5q/cGVn.jpeg',
        name: 'denabramov',
        mode: 'like',
        time: '10m',
        cover: 'https://i1.sndcdn.com/artworks-000397739259-slqvx2-t500x500.jpg'
      }
    ]
  }
]

const NotificationsRoute: FC<NotificationsRouteProps> = ({ className }) => {
  return (
    <Styled.Root className={className}>
      <Styled.Header>
        Notifications
      </Styled.Header>
      {data.map(el => (
        <Styled.Group key={el.title} title={el.title} counter={<Styled.AccentCounter>{el.count}</Styled.AccentCounter>}>
          {el.list.map((cell, index) => (
            <Styled.Cell
              key={`${cell.name}_${index}`}
              avatar={cell.avatar}
              name={cell.name}
              description={cell.mode === 'shared' ? 'shared your folder' : 'like your pin'}
              time={cell.time}
            />
          ))}
        </Styled.Group>
      ))}
    </Styled.Root>
  )
}

export default route(NotificationsRoute, ROUTE_NAMES.notifications)
