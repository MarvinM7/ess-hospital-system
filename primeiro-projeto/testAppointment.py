from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.alert import Alert
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.support.ui import Select


servico = Service(ChromeDriverManager().install())
chrome_opt = Options()
chrome_opt.add_experimental_option("detach", True)
navegador = webdriver.Chrome(service=servico, options=chrome_opt)

navegador.get('http://localhost:4200')
navegador.find_element('xpath', '//*[@id="navbarCollapse"]/ul/li[2]/a').click()
navegador.find_element('xpath', '//*[@id="email"]').send_keys('tes@email.com')
navegador.find_element('xpath', '//*[@id="password"]').send_keys('123456')
navegador.find_element('xpath', '/html/body/app-root/app-login/html/body/section/div/div/div/div/div/form/div[4]/button').click()
try: 
    WebDriverWait(navegador, 3).until(EC.alert_is_present())
    alert = navegador.switch_to.alert
    alert.accept()
except TimeoutException:
    print()


navegador.find_element('xpath', '/html/body/app-root/app-homepage/main/div[2]/a[1]').send_keys('\n')
select = Select(navegador.find_element('xpath', '/html/body/app-root/app-schedule-appointment/html/body/section/div/div[1]/div/div/div/form/div[2]/select'))
select.select_by_visible_text('Psiquiatria')
navegador.find_element('xpath', '//*[@id="local"]').send_keys('Recife')
navegador.find_element('xpath', '/html/body/app-root/app-schedule-appointment/html/body/section/div/div[1]/div/div/div/form/div[4]/input').send_keys('01112022')
navegador.find_element('xpath', '/html/body/app-root/app-schedule-appointment/html/body/section/div/div[1]/div/div/div/form/div[5]/button').click()
