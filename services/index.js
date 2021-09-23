import Login from './login'
import Account from './system/accountAuth'
import Partners from './system/partners'
import Menu from './system/menu'
import Metadata from './system/metadata'
import RoleAuth from './system/roleAuth'
import Log from './system/log'
import Management from './games/management'
import Channel from './games/channel'
import Sdk from './games/sdk'
import PackManage from './games/pack'
import Pack from './pack/packTool'

// 数据分析
import Overview from './analysis/overview'
import Newly from './analysis/newly'
import Pay from './analysis/pay'
import AnalysisChannel from './analysis/channel'
import Active from './analysis/active'
import Retained from './analysis/retained'
import Pandect from './analysis/pandect'

// 平台数据分析
import thePlatform from './platform/account'

// 广告买量
import AdAnalysis from './advert/analysis'
import AdSetting from './advert/setting'
import AdLogging from './advert/logging'

export const imgfileUpload  = '/img/fileUpload'
export default {
    imgfileUpload,
    Login,
    Account,
    Menu,
    Partners,
    RoleAuth,
    Log,
    Metadata,
    Management,
    Channel,
    Sdk,
    PackManage,
    Pack,
    // 发行数据分析
    Overview,
    Newly,
    Pay,
    AnalysisChannel,
    Active,
    Retained,
    Pandect,
    // 平台数据分析
    thePlatform,
    // 广告
    AdAnalysis,
    AdLogging,
    AdSetting
}
