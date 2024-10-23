import { createIconBase } from "../icon-base"
import { commonIconDefaultAttrs } from "../utils"

export const NonCustodialIcon = createIconBase({
  displayName: "NonCustodialIcon",
  viewBox: "0 0 256 256",
  className: "w-[256px] h-auto",
  ...commonIconDefaultAttrs,
  children: (
    <>
      <path d="M236.383 63.2171C238.353 66.1088 237.605 70.0497 234.714 72.0192L222.743 80.1724C219.851 82.142 215.911 81.3944 213.941 78.5027L185.747 37.109C183.778 34.2173 184.525 30.2765 187.417 28.3069L199.388 20.1537C202.279 18.1841 206.22 18.9317 208.19 21.8234L236.383 63.2171ZM225.124 65.6408L201.811 31.4128L197.007 34.6853L220.319 68.9133L225.124 65.6408Z" />

      <path d="M201.37 92.8116C186.581 108.23 162.21 108.622 146.908 94.1005H121.839C111.311 94.1005 105.196 84.5728 106.748 75.9391H101.896L79.3404 98.4949C73.9384 103.897 65.3988 104.538 59.2504 100.004C51.6674 94.4115 50.8149 83.3916 57.4476 76.6995L91.9176 41.9204C93.1072 40.7201 94.7271 40.0449 96.417 40.0449H179.875C181.97 40.0449 183.928 41.0798 185.109 42.8097L208.978 77.7961C210.624 80.2086 210.355 83.4442 208.333 85.5518L201.37 92.8116ZM121.839 83.4305C117.793 83.4305 115.9 78.7806 118.178 75.9391H143.072C146.018 75.9391 148.407 73.5505 148.407 70.6041C148.407 67.6577 146.018 65.2691 143.072 65.2691H100.101C98.4205 65.2691 96.8091 65.9365 95.6211 67.1246L71.7956 90.95C70.1252 92.6204 67.4846 92.8188 65.5835 91.4167C63.2387 89.6874 62.9751 86.2799 65.026 84.2106L98.224 50.7149H177.585L198.109 80.7973L193.669 85.4255C182.62 96.9452 164.16 96.8776 153.175 85.282C152.056 84.1014 150.5 83.4305 148.87 83.4305H121.839Z" />

      <path d="M112.629 159.226C97.3271 144.704 72.9558 145.097 58.1671 160.515L51.2036 167.774C49.182 169.882 48.9131 173.118 50.559 175.53L74.4283 210.516C75.6085 212.246 77.5673 213.281 79.6614 213.281H163.12C164.81 213.281 166.43 212.606 167.619 211.406L202.089 176.627C208.722 169.935 207.869 158.915 200.286 153.322C194.138 148.788 185.598 149.429 180.196 154.831L157.641 177.387H152.789C154.341 168.753 148.226 159.226 137.697 159.226H112.629ZM141.359 177.387C143.637 174.546 141.744 169.896 137.697 169.896H110.666C109.037 169.896 107.481 169.225 106.362 168.044C95.3769 156.449 76.9169 156.381 65.8674 167.901L61.4281 172.529L81.9516 202.611H161.313L194.511 169.116C196.562 167.046 196.298 163.639 193.953 161.909C192.052 160.507 189.412 160.706 187.741 162.376L163.916 186.202C162.728 187.39 161.116 188.057 159.436 188.057H116.465C113.518 188.057 111.13 185.668 111.13 182.722C111.13 179.776 113.518 177.387 116.465 177.387H141.359Z" />

      <path d="M23.1534 190.109C21.1839 187.217 21.9314 183.276 24.8231 181.307L36.7937 173.154C39.6854 171.184 43.6262 171.932 45.5958 174.823L73.7893 216.217C75.7589 219.109 75.0113 223.05 72.1196 225.019L60.1491 233.172C57.2574 235.142 53.3165 234.394 51.347 231.503L23.1534 190.109ZM34.4125 187.685L57.7254 221.913L62.5302 218.641L39.2173 184.413L34.4125 187.685Z" />

      <path d="M123.028 102.232C125.342 100.349 128.659 100.349 130.973 102.232C132.365 103.364 134.173 103.848 135.944 103.564C138.889 103.091 141.762 104.749 142.825 107.536C143.464 109.213 144.788 110.536 146.464 111.176C149.251 112.238 150.91 115.111 150.437 118.056C150.152 119.827 150.637 121.636 151.769 123.027C153.651 125.341 153.651 128.659 151.769 130.973C150.637 132.364 150.152 134.173 150.437 135.944C150.91 138.889 149.251 141.762 146.464 142.825C144.788 143.464 143.464 144.788 142.825 146.464C141.762 149.251 138.889 150.91 135.944 150.436C134.173 150.152 132.365 150.636 130.973 151.768C128.659 153.651 125.342 153.651 123.028 151.768C121.636 150.636 119.828 150.152 118.057 150.436C115.112 150.91 112.239 149.251 111.176 146.464C110.537 144.788 109.213 143.464 107.537 142.825C104.75 141.762 103.091 138.889 103.564 135.944C103.849 134.173 103.364 132.364 102.232 130.973C100.35 128.659 100.35 125.341 102.232 123.027C103.364 121.636 103.849 119.827 103.564 118.056C103.091 115.111 104.75 112.238 107.537 111.176C109.213 110.536 110.537 109.213 111.176 107.536C112.239 104.749 115.112 103.091 118.057 103.564C119.828 103.848 121.636 103.364 123.028 102.232ZM128.186 111.301C127.79 110.708 126.918 110.708 126.522 111.301L118.169 123.816C117.851 124.292 117.997 124.936 118.488 125.23L126.842 130.218C127.157 130.406 127.551 130.406 127.867 130.218L136.22 125.23C136.712 124.936 136.857 124.292 136.539 123.816L128.186 111.301ZM128.407 142.331C128.01 142.905 127.162 142.905 126.764 142.331L120.322 133.043C119.704 132.152 120.748 131.052 121.67 131.623L127.059 134.957C127.382 135.156 127.789 135.156 128.112 134.957L133.501 131.623C134.423 131.052 135.467 132.152 134.849 133.043L128.407 142.331Z" />
    </>
  ),
})
